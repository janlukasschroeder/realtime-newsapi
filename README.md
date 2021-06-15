# Real Time & Query API for Financial News

- Covers more than 10,000 news sources (Reuters, Bloomberg, The Wall
  Street Journal, Seeking Alpha, SEC, and many more). [See the full list of
  sources here.](https://newsfilter.io)
- Real-time financial news stream using websockets. The API returns a new article
  as soon as it is published on one of the supported news platforms.
- Query API to search the [newsfilter.io](https://newsfilter.io) article database
- JSON formatted
- Articles mapped to company ticker
- Supports Python, C++, JavaScript (Node.js, React, jQuery, Angular, Vue), Java
  and Excel plugins using websocket or socket.io clients

![https://i.imgur.com/Rd7x9Mi.png](https://i.imgur.com/Rd7x9Mi.png)

# Real Time Streaming API

You can use the streaming API in your command line, or develop your own application
using the API as imported package. Both options are explained below.

**Before you start**:

- Install Node.js if you haven't already. On Mac in the command line type `brew install node`.

## Command Line

Type in your command line:

1. `npm install realtime-newsapi -g` to install the package
2. `realtime-newsapi` to connect to the stream
3. Done! You will see new articles printed in your command line
   as soon as they are published on one of the supported news platforms.

## Node.js

Type in your command line:

1. `mkdir my-project && cd my-project` to create a new folder for your project.
2. `npm init -y` to set up Node.js boilerplate.
3. `npm install realtime-newsapi` to install the package.
4. `touch index.js` to create a new file. Copy/paste the example code below
   into the file index.js.

```js
const api = require('realtime-newsapi')();

api.on('articles', (articles) => {
  console.log(articles);
});
```

5. `node index.js` to start listening for new articles. New filings are
   printed in your console as soon as they are published on one of the supported news platforms.

## Live Demo

[https://codesandbox.io/s/k5q6nwqkrr](https://codesandbox.io/s/k5q6nwqkrr)

# Query API

Use `curl` or Postman to send requests to the query API. Articles that match your filter criteria are returned in JSON
format.

- API endpoint: `https://api.newsfilter.io/public/actions`
- Supported HTTP Method: `POST`
- Supported content type: `JSON`

## Example - FDA Approvals

Return all articles with "FDA Approval" in the title or description of the article.

Demo: [https://reqbin.com/bf9gon0l](https://reqbin.com/bf9gon0l)

```json
{
  "type": "filterArticles",
  "queryString": "title:\"FDA Approval\" OR description:\"FDA Approval\""
}
```

## Example - AAPL

Return all articles with mentioning `AAPL`.

Demo: [https://reqbin.com/b6qkjsyl](https://reqbin.com/b6qkjsyl)

```json
{
  "type": "filterArticles",
  "queryString": "title:AAPL OR description:AAPL OR symbols:AAPL"
}
```

# Response Format

- `id` (string) - unique ID of the article
- `title` (string) - title of the article
- `description` (string) - description of the article
- `symbols` (array) - array of ticker symbols mentioned in the article, e.g. AAPL
- `url` (string) - URL to original article
- `publishedAt` (string) - ISO 8601 formatted date of publication time
- `source` (object)
  - `id` (string) - unique ID of news source
  - `name` (string) - human readable name of news source
- `author` (string) - name of the author

## Example

```
[
    {
      source: {
        id: 'seekingAlpha',
        name: 'Seeking Alpha'
      },
      symbols: ['EWH'],
      title: 'Hang Seng soars despite massive rally',
      description: 'Hong Kong is gearing up for more protests this week after hundreds of thousands of anti-government demonstrators braved heavy rain to rally peacefully on Sunday, marking a change to what have often been violent clashes.The scenes showed that the movement is far from fizzling out, triggering fears about retail, tourism and business confidence, as well as worries over the city\'s stock and property markets.The Hang Seng index still rose 2.2% overnight following a healthy lead from Wall Street and key interest rate reforms from the People\'s Bank of China.ETFs: EWH, FHK, FLHK',
      url: 'https://seekingalpha.com/news/3492784-hang-seng-soars-despite-massive-rally',
      publishedAt: '2019-08-19T03:23:00-04:00',
      id: 'c7007ef5eae6cf50225cc4f19d368fe5'
    },
  {
    source: {
      id: 'businesswire',
      name: 'BusinessWire'
    },
    symbols: ['CELG'],
    title: 'U.S. FDA Approves INREBIC® (Fedratinib) as First New Treatment in Nearly a Decade for Patients With Myelofibrosis',
    description: 'SUMMIT, N.J.--(BUSINESS WIRE)--Celgene Corporation (NASDAQ: CELG) today announced the U.S. Food and Drug Administration (FDA) has approved INREBIC® (fedratinib) for the treatment of adult patients with intermediate-2 or high-risk primary or secondary (post-polycythemia vera or post-essential thrombocythemia) myelofibrosis.1',
    url: 'https://www.businesswire.com/news/home/20190816005292/en/U.S.-FDA-Approves-INREBIC%C2%AE-Fedratinib-New-Treatment',
    publishedAt: '2019-08-16T14:30:00+00:00',
    id: '129bd08d615d573fed8e12dbb917436e'
  }
];
```

# Consulting

This service is already used around the world by startups, top news organizations, graduate school researchers,
and, of course, hackers like you :)
If you or your company are interested in more advanced features feel free to email & contact me for consulting.
