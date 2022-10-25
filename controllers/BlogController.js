const blog = require("../models/Blog")
let blogList = blog.listBlog
const getListBlog = (req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify(blogList));
}

const addBlog = (req,res)=>{
    var id = 1;
    var loop =  true;
    while(loop){
        if(blogList.find(item=>item.id==id)){
            id+=1;
        }
        else{
            loop = false
        }
    }
    const newBlog = new blog.contrustor(id,req.body.content)
    blogList.push(newBlog);
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    res.end();
}
const addComment = (req,res)=>{
    // console.log(req.method,req.url)
    const id = req.params.id;
    const infoBlog = blogList.find(item=>item.id==id)
    if(infoBlog){
        infoBlog.comments.push(req.body.comment)
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.end();
    }
}
const getInfoBlog = (req,res)=>{
    // console.log(req.method,req.url)
    const id = req.params.id
    if(id){
        const infoBlog = blogList.filter(item=>item.id==id)
        if(infoBlog.length>0){
            res.statusCode = 200;
            res.setHeader('Content-Type','application/json');
            res.end(JSON.stringify(infoBlog));
        }
    }
}
const deleteBlog = (req,res)=>{
    // console.log(req.method,req.url)
    const id = req.params.id;
    if(id){
        const i = blogList.findIndex(item=> item.id == id)
        blogList.splice(i,1);
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.end(JSON.stringify(blogList));
    }
}
const updateBlog = (req,res)=>{
    // console.log(req.method,req.url)
    const id = req.params.id;
    const infoBlog = blogList.find(item=>item.id==id)
    if(infoBlog){
        infoBlog.content = req.body.content;
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.end();
    }
}
module.exports = {
    getListBlog,
    getInfoBlog,
    deleteBlog,
    addBlog,
    addComment,
    updateBlog
}