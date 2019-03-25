const postService = require('../service/postService')

const getAllPosts = async function (ctx) {
  try {
    var result = await postService.getAllPosts(ctx.params)
    var count = await postService.getPostCount(ctx.params)
    ctx.body = {
      success: true,
      data: {
        total: count,
        data: result
      }
    }
  } catch (err) {
    ctx.body = {
      success: false,
      info: err.message
    }
  }
}
// 添加Post
const addPost = async function (ctx) {
  const result = await postService.addPost(ctx.requset.body)
  if (result) {
    ctx.body = {
      success: true,
      info: '成功！',
      data: ''
    }
  } else {
    ctx.body = {
      success: false,
      info: '添加失败'
    }
  }
}

// 查询Post
const getPostDetail = async function (ctx) {
  const queryParams = {
    _id: ctx.params.postId
  }
  const result = await postService.getPostDetail(queryParams)
  postService.updatePostViews(queryParams)
  if (result) {
    ctx.body = {
      success: true,
      info: '成功',
      data: result
    }
  } else {
    ctx.body = {
      success: false,
      info: '查询失败'
    }
  }
}
// 移除删除Post
const removePost = async function (ctx) {
  const result = await postService.removePost(ctx.params.postId)
  if (result) {
    ctx.body = {
      success: true,
      info: '成功！',
      data: result
    }
  } else {
    ctx.body = {
      success: false,
      info: '删除失败'
    }
  }
}

module.exports = {
  getAllPosts,
  addPost,
  removePost,
  getPostDetail
}
