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

/* send a custom hub event */
Settle
    .Chat
    .sendEvent({ chatId: 'b92a1326-80cd-4e44-8980-27ba853e23bd', message: 'Scott moved into bitcoin' })
    .then((eventData) => {
        console.log(eventData)
    })
    .catch((error) => console.log(error));
