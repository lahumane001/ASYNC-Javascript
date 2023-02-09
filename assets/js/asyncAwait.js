let cl = console.log;

let promise = new Promise((resolve,reject) => {
    // api call
    setTimeout(() => {
        let error = Math.random() >= .4 ? false : true ;
        cl(error)
        if(!error) {
            resolve(`Sucessully Login !!!`)
        }else{
            reject(`Invalid Username or Password`)
        }
    } , 3000);
})

async function init(){
    try{
        let data = await promise;
        cl(data)
    }catch(err){
        cl(err)
    }
}

init();