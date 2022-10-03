const listBlog = [
    {
        id:1,
        content:"Cách sử dụng mảng trong JS?",
        comments:["lệnh push() dùng để thêm mới"]
    },
    {
        id:2,
        content:"hbs template là gì?",
        comments:["Cùng câu hỏi","Là một cách sử dụng views của JS ?"]
    }
]
function contrustor(id,content){
    this.id = id;
    this.content = content;
    this.comments = []
}

module.exports = {
    listBlog,
    contrustor
}