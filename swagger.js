const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0', autoBody: false })

const outputFile = './swagger.json'
const endpointsFiles = ['./src/routes.js']

const doc = {
  info: {
    title: 'WWebJS API',
    description: 'API wrapper for WhatsAppWebJS'
  },
  servers: [
    {
      url: '',
      description: ''
    },
    {
      url: 'http://localhost:3000',
      description: 'localhost'
    }
  ],
  securityDefinitions: {
    apiKeyAuth: {
      type: 'apiKey',
      in: 'header',
      name: 'x-api-key'
    }
  },
  produces: ['application/json'],
  tags: [
    {
      name: 'Session',
      description: 'Handling multiple sessions logic, creation and deletion'
    },
    {
      name: 'Client',
      description: 'All functions related to the client'
    },
    {
      name: 'Message'
    }
  ],
  definitions: {
    StartSessionResponse: {
      success: true,
      message: 'Session initiated successfully'
    },
    StatusSessionResponse: {
      success: true,
      state: 'CONNECTED',
      message: 'session_connected'
    },
    RestartSessionResponse: {
      success: true,
      message: 'Restarted successfully'
    },
    TerminateSessionResponse: {
      success: true,
      message: 'Logged out successfully'
    },
    TerminateSessionsResponse: {
      success: true,
      message: 'Flush completed successfully'
    },
    ErrorResponse: {
      success: false,
      error: 'Some server error'
    },
    NotFoundResponse: {
      success: false,
      error: 'Not found error'
    },
    ForbiddenResponse: {
      success: false,
      error: 'Invalid API key'
    },
    GetSessionsResponse: {
      success: true,
      result: []
    }
  }
}

swaggerAutogen(outputFile, endpointsFiles, doc)
