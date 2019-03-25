const tagService = require('../service/tagService')

const getAllTags = async function (ctx) {
  try {
    var result = async function (ctx) {
      ctx.body = {
        success: true,
        data: result
      }
    }
  } catch (err) {
    ctx.body = {
      success: false,
      data: result
    }
  }
}

const addTag = async (ctx) => {
  const result = await tagService.addTag(ctx.request.body)
  if (result) {
    ctx.body = {
      success: true,
      data: ''
    }
  } else {
    ctx.body = {
      success: false,
      data: ''
    }
  }
}

module.exports = {
  getAllTags,
  addTag
}
