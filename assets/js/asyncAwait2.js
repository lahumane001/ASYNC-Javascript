let cl = console.log;

const blogContainer = document.getElementById('blogContainer');

let blogs =[
    {title : "Angular 15 Update" , content :"It supports satndalone Component"},
    {title : "ES6 - promise" , content : "Es6 gives us promise to handle Async Operation"},
];

function createBlog(blog){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            // api call
            let error = Math.random() >= .2 ? false : true;
            if(!error){
                blogs.push(blog);
                resolve(`Post is Created Sucessfully`)
            }else(
                reject(`Something went wrong while Creating Post`)
            )
        }, 3000);
    })
   
}
function fetchdata(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            // api call
            let error = Math.random() >= .2 ? false : true;
            if(!error){
                resolve(`Posts are fetched Sucessfully`)
            }else(
                reject(`Something went wrong while fetching Post`)
            )
        }, 1000);
    })
}
function templatingCard(arr){
    let result = '';
    arr.forEach(blog =>{
        result +=`
            <div class = "card mb-4">
                <div class ="card-header">${blog.title}</div>
                <div class ="card-body">${blog.content}</div>
            </div>
        `
    });
    blogContainer.innerHTML = result;
}

async function init(){
    try{
        await createBlog({title : "ES7 - Async Await" , content : "ES7 gives us Async-Await to handle Async Operation"});
       let result =  await fetchdata();
       cl(result);
       Swal.fire({
        icon: 'success',
        title: result,
        showConfirmButton: true,
        timer: 4500
      })
        templatingCard(blogs)
    }catch (err) {
        Swal.fire({
            icon: 'error',
            title: err,
            timer: 7000
          })
    }
}

init();