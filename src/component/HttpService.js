// import React from 'react';
// import Request from 'react-http-request';	
import axios from 'axios';
var resp;
export function HttpService(url) {

	const promise = new Promise((resolve, reject) => {
	
		axios.get(url)
		  .then(function (response) {

		  	if (response.status===200){
		  		resolve(response); 		
		  	}
		  	else{
		  		reject(Error(response.statusText));
		  		}
		    });
	});

	promise.then((data) => {
	  //console.log('Got data! Promise fulfilled.');
	    return data;
	}, (error) => {
	  //console.log('Promise rejected.');
	  console.log(error.message);
	});

	return promise;
}

