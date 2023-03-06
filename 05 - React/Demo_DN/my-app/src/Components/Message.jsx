import React, { useState } from 'react';
export default function Message() {


    // Deklarirarali smo novu state varijabilu koja se zove 'message' i postavili smo inicijalno stanje na prazan string ('')
    let [message, setMessage] = useState('');


    return (
        <div>
            <input type="text" placeholder='Enter a message' value={message} onChange={e => { setMessage(e.target.value) }} />
            <p>The message is: {message}</p>

        </div>
    )

}