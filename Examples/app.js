const Settle = require('../settle')

/**

Generate a public and private api key at https://settle.finance/os
Make sure your .env file reflects your keys to make authenticated requests.

**/


/** App **/

// Return a list of users who installed your app
Settle.run(process.env.SETTLE_JSAPI, '/api/app/Users', { })
.then((result) => {
  console.log('Users List:')
  console.log(result)
})
.catch((reason)=>{
  console.log(reason)
})


/*
var identityProofToken="eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJkMTJmYTY3ZS00ZGFkLTQzYzMtYjEyYS0wZDllZjhlNzQ3MWIiLCJzdWIiOiIzNzc3N2IzMi02MWNkLTQ3ZTktOGRhZS1iNzVmNDc5YTZhMzIiLCJuYmYiOjE1NDE1MjUzMjEsImV4cCI6MTU0MjEzMDEyMSwiaWF0IjoxNTQxNTI1MzIxLCJpc3MiOiI5OTk5MDk3OS03YzhjLTQ1MTEtOWY4My1mZGQzZDBkZDkxZTMiLCJhdWQiOiIqIn0.bFTvmOcOKM3On8Ozjxpog0x-ZLqzYb6b04PU64O_maaXZCA64KQFS_agbpV4O5diujNKzqElHNJJPr83qe5iShSt5RA09W-XM40FCnyES9xPgFRIj9ElioQ-RH52pkKiEPEwbsDhPzY7WUrgSS0EWKbGBe02jvpQh-2OOmZrgKohtOu4aqwKX5xJNetgyuM3BoQBbmQYgSgrq23nwMku7rXg7mWD64wA5D7uM_5E4buMOVtd_-A-bYD4eYawiwgjpr3rfz-vyonT-4osr6J9nAq5bO8Ra9NeoRl3olwlbeT6J4WleG543MMQs3rRS6d-97D-F02PT5mG_36_ouQfRsJ0CJF0XdaXcOtj0pi7LLYWsz1ZB7teW0DbOVVSXzpVgdctmMI8FSeuIhIOJNoHsd20XNX8Q1tCtNn5qRxUxreLhyLqm9wSphIWvc1O046ErxLWIQIA2nzqTZW63GY__ndHZrSlIaZUS3s1U26AUOJoamdIoiylBsQJZb34-HS53yamWZ6CYfHYWb3xLrp4e1BdxdiuGCNcGMrR0dbiD7z6ofgLGqV1UDErQIdMTtVgRwcdw8EcTcabd1_Bpcx8OO1L0K1EDlFkg0WsnnGXT9XQ9T5ozScYllnwORelS8l2g92kr0Pg5gwUNnVQoprXCHaSW0l-yA6UA23pr2YYcvE"

// Returns GUID by using identityProofToken (from 'user' cookie)
Settle.exchangeTokenForGuid(identityProofToken).then((result) => {
  console.log('GUID: ' + result);
})
.catch((reason)=>{
  console.log(reason)
})*/