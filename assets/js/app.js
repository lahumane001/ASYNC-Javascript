let cl = console.log;

// Sync
// Single threaded
// Non Blocking

function print10(){
    cl(10)
}
function print20(){
    setTimeout(() =>{
        //API cal to get data
        cl(20);
        print30()
    }, 1000)
    
}
function print30(){
    cl(30)
}
// print10();
// print20();
// print30();

function fetchdata(callBackFun){
    setTimeout(() =>{
        cl('data is fetched successfully')
        // templatingLi();
        callBackFun()
    },2000)
}
function templatingLi(){
    cl('List is created sucessfully')
}
function templatingCard(){
    cl('Card is created sucessfully')
}

fetchdata(templatingLi);
fetchdata(templatingCard)
// templatingLi();
// templatingCard();
