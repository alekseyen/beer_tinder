import React, { Component } from "react";

async function request_to_back(path, method, body) {
    console.log('Sending ', method, ' to ', path);
    console.log('Content: ', body);

    var result = null;
    let response = fetch('http://84.201.136.171:8000/' + path +'/', {
            method: method,
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: body
        }).then(
            response => response.json()
        ).then(jsondata => {
                console.log('Got ', jsondata);
                result = jsondata;
            }
        );
    console.log(result);
    return result;
}

export default request_to_back;