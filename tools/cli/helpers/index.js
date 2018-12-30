/* eslint-disable no-console */
const parseArg = require('./parseArg');

function stdout(output = '') {
  console.log(`${output}`);
}

function stderr(outputErr = '') {
  const childProcess = require('child_process');
  const now = new Date();

  childProcess.exec('git rev-parse HEAD', (err, output) => {
    if (output) {
      console.error(
        `[${now}]\n[Last Commit: ${output.replace(
          /\n$/,
          '',
        )}]\n\n${outputErr}\n\n`,
      );
    } else {
      console.error(`[${now}]\n\n${outputErr}\n\n`);
    }
  });
}

function exec(cmd, cb) {
  const childProcess = require('child_process');

  childProcess.exec(cmd, (err, output) => {
    if (err) {
      cb(err);
    } else {
      stdout(output);
      cb({ success: true });
    }
  });
}

function spawn(cmd, additionalOpt = {}, cb) {
  const childProcess = require('child_process');
  const parts = cmd.split(/\s+/g);
  const opt = { stdio: 'inherit', ...additionalOpt };
  const p = childProcess.spawn(parts[0], parts.slice(1), opt);

  p.on('exit', code => {
    let err = null;

    if (code) {
      err = new Error(`command ${cmd} exited with wrong status code ${code}`);
      err.code = code;
      err.cmd = cmd;
    }

    if (cb) cb(err);
  });
}

function series(cmds, additionalOpts, cb) {
  const directExecs = ['&&', '||', '|'];
  const execNext = () => {
    const cmd = cmds.shift();

    if (directExecs.map(rule => cmd.includes(rule)).includes(true)) {
      exec(cmd, err => {
        if (err) {
          cb(err);
        } else if (cmds.length) execNext();
        else cb({ success: true });
      });
    } else {
      const opts = additionalOpts.length
        ? { stdio: 'inherit', ...additionalOpts.shift() }
        : { stdio: 'inherit' };

      spawn(cmd, opts, err => {
        if (err) {
          cb(err);
        } else if (cmds.length) execNext();
        else cb({ success: true });
      });
    }
  };

  execNext();
}

module.exports = { stdout, stderr, spawn, exec, series, parseArg };
