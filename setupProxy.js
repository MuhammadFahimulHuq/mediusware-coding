const express = require('express');
const cors = require('cors');
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');
app.use(cors());

// ...your other server configuration

module.exports = function (app) {
    app.use(
      '/api',
      createProxyMiddleware({
        target: 'http://example.com', // Replace with the actual API URL
        changeOrigin: true,
      })
    );
  };

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});