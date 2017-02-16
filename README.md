# Midori - Another GoCD Pipeline Monitor

Midori is a simplified pipeline monitor for [GoCD](https://www.gocd.io/).  
It aims to display basic pipeline status with auto-refresh as the screenshot below:

![Midori Screenshot](screenshot.png)

## Set up

First time: `yarn install`

To start the monitor: `npm start`

It will build the clientside files and start server at `localhost:3000`

## Configuration

The server-side config file sits in `/server/config.js`, copy and rename `config.default.js` to `config.js` and make your changes there.

```
export default {
  apiServer: 'https://GOCD.SERVER.HOST/go/api',
  username: 'GOCD_USER',
  password: 'GOCD_PASS'
}
```

The client-side config file sits in `/client/config.js`, only board name and refresh interval is configurable.

```
const config = {
  BOARD_NAME: 'Korprulu',
  PIPELINE_REFRESH_INTERVAL: 5000,
  GLOBAL_REFRESH_INTERVAL: 10 * 60 * 1000
}
```
