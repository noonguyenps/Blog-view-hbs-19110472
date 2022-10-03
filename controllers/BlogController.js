const blog = require("../models/Blog")
let blogList = blog.listBlog
const getListBlog = (req,res)=>{
    // console.log(req.method,req.url)
    if(blogList.length!==0){  
        res.render('home',{blogList:blogList, empty:0})
    }else{
        res.render('home',{empty:1})
    }
}

const addBlog = (req,res)=>{
    // console.log(req.method,req.url)
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
    res.redirect('/');
}
const addComment = (req,res)=>{
    // console.log(req.method,req.url)
    const id = req.params.id;
    const infoBlog = blogList.find(item=>item.id==id)
    if(infoBlog){
        infoBlog.comments.push(req.body.comment)
        res.redirect('/'+id);
    }
    else{
        res.render('error');
    }
}
const getInfoBlog = (req,res)=>{
    // console.log(req.method,req.url)
    const id = req.params.id
    if(id){
        const infoBlog = blogList.filter(item=>item.id==id)
        if(infoBlog.length>0){
            res.render('infoBlog', {
                infoBlog: infoBlog
            })
        }else{
            res.render('error');
        }
    }
}
const deleteBlog = (req,res)=>{
    // console.log(req.method,req.url)
    const id = req.params.id;
    if(id){
        const i = blogList.findIndex(item=> item.id == id)
        blogList.splice(i,1);
        res.redirect('/');
    }
    else{
        res.render('error')
    }
}
const updateBlog = (req,res)=>{
    // console.log(req.method,req.url)
    const id = req.params.id;
    const infoBlog = blogList.find(item=>item.id==id)
    if(infoBlog){
        infoBlog.content = req.body.content;
        res.redirect('/'+id);
    }
    else{
        res.render('error');
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