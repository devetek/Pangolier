import express from 'express';
import { renderFile } from 'ejs';

const debug = require('debug')('server');
const app = express();

debug('Starting...');

app.engine('html', renderFile);
app.set('view engine', 'html');
app.set('views', 'dist');

app.use('/', express.static('dist', { index: false }));

app.get('/*', (req, res) => {
  res.render('./index', { req, res });
});

app.listen(process.env.PORT, () => {
  debug(`Listening on: http://${process.env.HOST}:${process.env.PORT}`);
});
