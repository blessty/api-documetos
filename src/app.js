const express = require('express');
const bodyParser = require('body-parser');

const documentsRouter = require('./routes/documents');
const { errorHandler } = require('./utils/errorHandler');
const { logger } = require('./utils/logger');

const app = express();

app.use(bodyParser.json());

// Logger
app.use((req, res, next) => {
  logger.info({
    method: req.method,
    path: req.path
  });
  next();
});

// Routes
app.use('/documents', documentsRouter);

// Health
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Errors
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});

module.exports = app;
