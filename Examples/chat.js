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
    .sendEvent({ chatId: '9181ea27-998b-4990-95ba-86706230fbd5', message: 'Scott moved into bitcoin' })
    .then((eventData) => {
        console.log(eventData)
    })
    .catch((error) => console.log(error));
