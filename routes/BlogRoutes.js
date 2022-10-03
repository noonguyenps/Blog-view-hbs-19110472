const express = require('express')
const BlogController = require('../controllers/BlogController')
const route = express.Router()

route.get('/',BlogController.getListBlog)
route.get('/:id',BlogController.getInfoBlog)
route.post('/blog/remove/:id',BlogController.deleteBlog)
route.post('/add',BlogController.addBlog)
route.post('/add/comment/:id',BlogController.addComment)
route.post('/edit/blog/:id',BlogController.updateBlog)
module.exports = route
