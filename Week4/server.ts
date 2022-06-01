#!/usr/bin/env node

import app from './app';
import debug from 'debug';
debug('week4:sever');
import http from 'http';
import { HttpError } from 'http-errors';

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val:string) 
{
  var port = parseInt(val, 10);

  if (isNaN(port))
  {
    return val;
  }

  if (port >= 0)
  {
    return port;
  }

  return false;
}

function onError(error: HttpError)
 {
  if (error.syscall !== 'listen')
  {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;
 
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() 
{
  let addr = server.address() as string;
  let bind = 'port ' + addr;
  debug('Listening on ' + bind);
}
