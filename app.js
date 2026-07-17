{
  "name": "ember-chat",
  "version": "1.0.0",
  "description": "A full-stack AI chatbot with chat history, powered by a free LLM API",
  "main": "server.js",
  "type": "commonjs",
  "scripts": {
    "start": "node server.js",
    "dev": "node server.js"
  },
  "engines": {
    "node": ">=18.0.0"
  },
  "dependencies": {
    "better-sqlite3": "^11.3.0",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "nanoid": "^3.3.7"
  }
}
