import winston from 'winston'

export default winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true
    }),
    new winston.transports.File({
      level: 'error',
      filename: 'mb-api-error.log',
      handleExceptions: true,
      json: true,
      maxsize: 5 * 1024 * 1024, // 5MB
      maxFiles: 5,
      colorize: false
    })
  ]
})
