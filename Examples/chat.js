/**
 * @author arman
 * @since 11/19/18
 *
 */
'use strict';

const Settle = require('../settle');

/**

 Generate a public and private api key at https://settle.finance/os
 Make sure your .env file reflects your keys to make authenticated requests.

 Chat requires the user to install your app and opt in to provide data to you.
 If a user didn't install your app, the request will throw unauthorized error.
 **/


/** Chat Event **/

/* send an event message from you app to 1v1 chat or chat hub */
Settle
    .Chat
    .sendEvent({ chatId: 'chat-id-that-we-passed-to-your-app', message: 'Scott moved into bitcoin', guid: 'user-guid' })
    .then((eventData) => {
        console.log(eventData)
    });