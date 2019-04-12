# Realtime News API

- Engine behind [newsfilter.io](https://newsfilter.io)

![https://i.imgur.com/Rd7x9Mi.png](https://i.imgur.com/Rd7x9Mi.png)

# Install

`npm install realtime-newsapi`

# Node.js example

Demo: https://codesandbox.io/s/k5q6nwqkrr

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
    source: { id: 'bloomberg', name: 'Bloomberg' },
    categories: [],
    symbols: [],
    markets: [],
    title: 'Oil Set for Longest Weekly Rally Since 2016 as Supply Risks Rise',
    content:
      'Oil headed for its longest weekly winning streak since 2016 as supply disruptions in Libya and Venezuela persist at a time when the OPEC+ coalition is showing record compliance with its pledged output cuts.\r\nFutures in New York rose 0.4 percent Friday and are… [+3809 chars]',
    description:
      'Oil headed for its longest weekly winning streak since 2016 as supply disruptions in Libya and Venezuela persist at a time when the OPEC+ coalition is showing record compliance with its pledged output cuts.',
    url:
      'https://www.bloomberg.com/news/articles/2019-04-11/oil-set-for-sixth-straight-weekly-gain-on-tighter-global-supply',
    urlToImage:
      'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ib.Iu8vt84bY/v0/1200x800.jpg',
    author: 'Heesu Lee',
    important: false,
    publishedAt: '2019-04-12T07:10:31Z',
    country: '',
    id: 'b4ad3d3b51b886e3c29bcb9b69e154f0'
  },
  {
    source: { id: 'reuters', name: 'Reuters' },
    categories: [],
    symbols: [],
    markets: [],
    title:
      'China March exports rebound to five-month high but imports fall more than expected',
    content:
      'BEIJING (Reuters) - China’s exports rebounded in March but imports shrank for a fourth straight month and at a sharper pace, painting a mixed picture of the economy as trade talks with the United States reach their endgame. \r\nInvestors are hoping for more sig… [+4165 chars]',
    description:
      "China's exports rebounded in March but imports shrank for a fourth straight month and at a sharper pace, painting a mixed picture of the economy as trade talks with the United States reach their endgame.",
    url: 'https://in.reuters.com/article/us-china-economy-trade-idINKCN1RO0Q7',
    urlToImage:
      'https://s3.reutersmedia.net/resources/r/?m=02&d=20190412&t=2&i=1376156960&w=1200&r=LYNXNPEF3B0HK',
    author: 'Reuters Editorial',
    important: false,
    publishedAt: '2019-04-12T07:24:34Z',
    country: '',
    id: 'd2520491a4068da275c82b720d954ee0'
  }
];
```
