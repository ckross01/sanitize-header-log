# sanitize-header-log
> Remove cookie information from logs. Logs with bole as an express middleware.

## setup
```js
npm i sanitize-header-log --save
```
## test
```js
npm test
```

## examples

### code
```js
const express = require('express');
const logger = require('sanitize-header-log');
const bole = require('bole');
const app = express();

bole.output({
  level: 'info',
  stream: process.stdout
});

app.use((req, res, next) => logger(req, bole.info, next));
```

### log results
```js
{
  "time": "2016-05-26T20:27:26.208Z",
  "hostname": "localhost",
  "pid": 1234,
  "level": "info",
  "name": "website",
  "req": {
    "method": "GET",
    "url": "/test",
    "headers": {
      "host": "localhost:1234",
      "connection": "keep-alive",
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.94 Safari/537.36",
      "accept": "*/*",
      "referer": "http://localhost:15444/",
      "accept-encoding": "gzip, deflate, sdch",
      "accept-language": "en-US,en;q=0.8",
    },
    "remoteAddress": "127.0.0.1",
    "remotePort": 1234
  }
}
```
