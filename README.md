## Settle SDK
The Settle SDK abstracts using the price feed and settle API by wrapping authentication in a function.


## How it works
Instead of authenticating and running requests yourself, use Settle.run and pass in 3 parameters:
Settle.run(< API >, < Endpoint >, < Params >)

## Important - Authentication
You need to register an app in settle in order to use the API. Head over to https://settle.finance/app/developer-tools and join our developer program.
![Alt text](/Images/app-permission.png?raw=true)
Set an app name and grab the automatically generated API keys. Update your .env folder so that SETTLE_API_KEY and SETTLE_API_SECRET reflect your keys.
<br />
You can now access the Settle SDK!

### Testing user specific endpoints
#### You can access the price feed API, but to access a users portfolio they need to install your app and opt into providing their data to you.

In your developer tools, https://settle.finance/app/developer-tools, click the install button to try opting into your app before it's available in the app store.

## Examples

### Return ticker information about Bitcoin
Settle.run('https://dbapi.settle.finance', '/api/public/ticker', {id: '1'})
