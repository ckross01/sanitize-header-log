module.exports = (req, logger, next) => {
  if (typeof next !== 'function') {
    console.warn('next needs to be a function');
  }
  logger({
    time: req.time,
    method: req.method,
    url: req.url,
    userAgent: req.headers['user-agent'],
    refer: req.headers.referer,
    acceptEncoding: req.headers['accept-encoding'],
    remoteAddress: req.connection.remoteAddress,
    remotePort: req.connection.remotePort
  });
  next();
};
