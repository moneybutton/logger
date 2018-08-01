import * as log from 'loglevel'
import config from './config'

log.setLevel(config.get('MONEY_BUTTON_LOG_LEVEL'))

export default log
