let cl = console.log;

// Promise is a javascript object which gives some value in future
// It used to handle Async operation in javascript

// states of promise
// pending >> waiting for result
// fullfilled >> the action related to the promise is success
// reject >> the action related to the promise is failed
// settled >> promise either fullfilled or reject

// Benifits of Promise
// 1 Improve readbility of the code
// 2 Better handling Async operation 
// 3 Better Error handling
// 4 Better flow of control definations

let promise = new Promise((resolve, reject) => {
    // api call
    setTimeout(() => {
        let error = Math.random() >= .5 ? false : true;
        cl(error)
        if(!error){
            resolve(`Successfully Login !!!`);
        }else {
            reject(`Invalid Username or Password`)
        }
    }, 3000);
})


promise
    .then((res) => {
        cl(res)
    })
    .catch((err) => {
        cl(err)
    })