## Settle SDK
The Settle SDK abstracts using the price feed and settle API by wrapping authentication in a function.

[Documentation](https://docs.settle.finance/)

[Support channel](https://discord.gg/9C9NYVc)


```
npm install settlesdk
```

## How it works
Instead of authenticating and running requests yourself, use the settle object to run api functions.

For example
```
Settle.PriceFeed.Ticker({token: 'Bitcoin'})
```

## Important - Authentication
You need to register an app in settle in order to use the API. Head over to https://settle.finance/app/developer-tools and join our developer program.

![Alt text](https://github.com/SettleFinance/Settle-SDK/raw/master/Images/app-permission.png?raw=true)

Set an app name and grab the automatically generated API keys. Update your .env file in your projects root so that SETTLE_API_KEY and SETTLE_API_SECRET reflect your keys. If your app doesn't use environment variables yet, you will need to setup a loader like [dotenv](https://www.npmjs.com/package/dotenv).

```
SETTLE_API_KEY    = "API KEY HERE"
SETTLE_API_SECRET = "API SECRET HERE"
```

You can now access the Settle SDK!

### Testing user specific endpoints
#### You can access the price feed API, but to access a users portfolio they need to install your app and opt into providing their data to you.

In your developer tools, https://settle.finance/app/developer-tools, select "portfolio" in data access permissions and click the install button to try opting into your app before it's available in the app store.

## [API reference ](https://docs.settle.finance/display/SP/API+Documentation)

## User specific apps
When your app or chat plugin is loaded inside of settle, we will pass a user_id get param (?user_id) along with the app mode (?mode).

#### Exchange token for a user id
```
Settle.exchangeTokenForGuid(token)
```

## Examples

#### Return ticker information about Bitcoin
```
Settle.PriceFeed.Ticker({id: '1'})
```

#### Convert a GUID to a username
```
Settle.User.GuidToUsername({guid: guid})
```

#### Send an custom hub event
```
Settle.Chat.sendEvent({ chatId, message })
```

#### Send a notification to a user
```
Settle.App.SendNotification({guid: guid})
```

#### Return a users holdings with a list of trades for each asset
```
Settle.Portfolio.HoldingsWithTrades({ user_id })
```

#### Return a list of users who installed my app
```
Settle.App.Users()
```
