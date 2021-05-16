import React, { useState } from 'react';
import 'gitment/style/default.css';
import Gitment from 'gitment';


const GitComments = (props) => {
    const comments = (uuid) => {
        // var gitment = new Gitment({
        //     id: uuid,
        //     owner: 'su-dd',
        //     repo: 'su-dd.github.io',
        //     oauth: {
        //         client_id: '30e1a55bec1b428b5f48',
        //         client_secret: 'f7ece78d04d17f9da3b36a87c19c7c0483cba09b',
        //     },
        //     // ...
        //     // For more available options, check out the documentation below
        // })
        //
        // return gitment.render();


        var clientId = '82c800a8b9db1cb2a145'
        var clientSecret = 'abcb4790d98c686e7656d28c756ebbaac5b89d3a'
        var gitment = new Gitment({
            id: 'demo page',
            owner: 'imsun',
            repo: 'gitment',
            oauth: {
                client_id: clientId,
                client_secret: clientSecret,
            },
        })

        return gitment.render();

    }

    const test = () => {
        return (<div>test</div>);
    }


    return (
        <div id="GitComments">
            {comments(props.uuid)}
        </div>
    );
}

export default GitComments;