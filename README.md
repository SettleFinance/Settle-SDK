## Settle SDK
The Settle SDK abstracts using the price feed and settle API by wrapping authentication in a function.


## How it works
Instead of authenticating and running requests yourself, use Settle.run and pass in 3 parameters:

Settle.run(< API >, < Endpoint >, < Params >)

## Important - Authentication
You need to register an app in settle in order to use the API. Head over to https://settle.finance/app/developer-tools and join our developer program.

![Alt text](/Images/app-permission.png?raw=true)

Set an app name and grab the automatically generated API keys. Update your .env file so that SETTLE_API_KEY and SETTLE_API_SECRET reflect your keys.

```
SETTLE_API_KEY    = "API KEY HERE"
SETTLE_API_SECRET = "API SECRET HERE"
SETTLE_JSAPI      = "https://jsapi.settle.finance"
SETTLE_DBAPI      = "https://dbapi.settle.finance"
```

You can now access the Settle SDK!

### Testing user specific endpoints
#### You can access the price feed API, but to access a users portfolio they need to install your app and opt into providing their data to you.

In your developer tools, https://settle.finance/app/developer-tools, select "portfolio" in data access permissions and click the install button to try opting into your app before it's available in the app store.

## Examples

#### Return ticker information about Bitcoin
Settle.run('https://dbapi.settle.finance', '/api/public/ticker', {id: '1'})

#### Return a users holdings with a list of trades for each asset
Settle.run('https://jsapi.settle.finance', '/api/public/PortfolioTracker/HoldingsWithTrades', { user_id })

#### Return a list of users who installed my app
Settle.run('https://jsapi.settle.finance', '/api/app/Users', {})
