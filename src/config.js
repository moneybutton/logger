import MoneyButtonConfigBuilder from 'mb-config'

const config = new MoneyButtonConfigBuilder()
  .addValueWithDefault(
    'MONEY_BUTTON_LOG_LEVEL',
    process.env.MONEY_BUTTON_LOG_LEVEL,
    'info'
  )
  .build()

export default config
