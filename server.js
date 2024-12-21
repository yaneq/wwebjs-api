const app = require('./src/app')
const { baseWebhookURL } = require('./src/config')
const { logger } = require('./src/logger')
require('dotenv').config()

// Start the server
const port = process.env.PORT || 3000

// Check if BASE_WEBHOOK_URL environment variable is available
if (!baseWebhookURL) {
  logger.error('BASE_WEBHOOK_URL environment variable is not set. Exiting...')
  process.exit(1) // Terminate the application with an error code
}

app.listen(port, () => {
  logger.info(`Server running on port ${port}`)
})

// puppeteer uses subscriptions to SIGINT, SIGTERM, and SIGHUP to know when to close browser instances
// this disables the warnings when you starts more than 10 browser instances
process.setMaxListeners(0)
