let cl = console.log;

const blogContainer = document.getElementById('blogContainer');

let blogs =[
    {title : "Angular 15 Update" , content :"It supports satndalone Component"},
    {title : "ES6 - promise" , content : "Es6 gives us promise to handle Async Operation"}
];

function createBlog(blog,callBackFun){
    setTimeout(() =>{
        blogs.push(blogs);
        cl(blogs, `New blog is Created Successfully`)
        callBackFun();
    }, 3000);
}
function fetchdata(){
    setTimeout(() =>{
        cl(blogs,`All blogs are fetched successfully !!!`);
        templatingCard(blogs)
    },1000);
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
createBlog({title : "ES7 - Async Await" , content : "ES7 gives us Async-Await to handle Async Operation"},fetchdata);
// templatingCard(blogs)
// fetchdata();
// callback hell