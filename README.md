## Settle SDK

The Settle SDK abstracts using the API by wrapping the authentication in a function.


## Examples

### Return ticker information about Bitcoin
Settle('https://dbapi.settle.finance', '/api/public/ticker', {id: '1'})
