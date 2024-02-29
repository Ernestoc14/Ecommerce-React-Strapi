const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: ["https:ecommerce-react-strapi.vercel.app", "http://localhost:3000"],
}))

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
