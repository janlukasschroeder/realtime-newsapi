# Realtime News API

# Install

`npm install realtime-newsapi`

# Node.js example

```js
const api = require('realtime-newsapi')();

api.on('articles', articles => {
  console.log(articles);
});
```

# Response Object

- `id`
- `title`
- `source`
- `url`
- `description`
- `content`
- `categories`
- `markets`
- `symbols`
- `publishedAt`

## Example

```js
[
  {
    title:
      'Amazon Provides Robotics Grants to 100 Schools in Underserved and Underrepresented Communities Across the Country to Inspire Next Generation of Computer Scientists',
    source: { id: 'businesswire', name: 'BusinessWire' },
    url:
      'https://seekingalpha.com/news/3450204-imf-world-bank-begin-spring-meetings',
    categories: [],
    symbols: [],
    markets: [],
    content: '',
    description:
      'SEATTLE--(BUSINESS WIRE)--Amazon (NASDAQ: AMZN) and FIRST today announced that 100 schools serving students from underrepresented and underserved communities from across the country will receive an Amazon Future Engineer Robotics Grant to inspire the next generation of computer scientists. The 100 schools across 21 states will receive support to launch FIRST robotics teams, including teacher professional development to learn about robotics, $10,000 from Amazon to expand access to computer science education in their school, and a tour of a local Amazon fulfillment center. Read more about the new program here.',
    publishedAt: '2019-04-12T08:07:39+00:00',
    id: '43bf590fbc62cb2eafcf9962f3092128'
  },
  {
    source: { id: 'seekingAlpha', name: 'Seeking Alpha' },
    categories: [],
    symbols: [],
    markets: [],
    title: 'UNIFIN Financiera reports Q1 results',
    content: '',
    description: '',
    url:
      'https://seekingalpha.com/news/3450203-unifin-financiera-reports-q1-results',
    publishedAt: '2019-04-12T08:04:36+00:00',
    id: '4ebab610525b5948a377b1db801dd57f'
  }
];
```
