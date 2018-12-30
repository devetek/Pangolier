/* eslint-disable no-console */
import { parseArg } from './helpers';

export function format(time) {
  return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
}

function run(fn, options) {
  const task = typeof fn.default === 'undefined' ? fn : fn.default;
  const start = new Date();

  console.info(
    `[${format(start)}] Starting '${task.name}${
      options ? ` (${options})` : ''
    }'...`,
  );

  return task(options).then(() => {
    const end = new Date();
    const time = end.getTime() - start.getTime();

    console.info(
      `[${format(end)}] Finished '${task.name}${
        options ? ` (${options})` : ''
      }' after ${time} ms`,
    );
  });
}

if (require.main === module && process.argv.length > 2) {
  delete require.cache[__filename];

  const params = parseArg(process.argv[4]);

  console.log({ argv: process.argv, params });

  process.exit(0);

  const module = require(`./${process.argv[2]}.js`);

  run(module)
    .then(() => {
      process.exit();
    })
    .catch(err => {
      console.error(err.stack);
      process.exitCode = 1;
    });
}

export default run;
