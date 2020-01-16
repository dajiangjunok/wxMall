import request from './request.js'

export function getCategoryDetail() {
  return request({
    url: '/category'
  })
}

export function getSubCategoryDetail(maitKey) {
  return request({
    url: '/subcategory',
    data: {
      maitKey
    }
  })
}

export function getSubRecommentd(miniWallkey, type) {
  return request({
    url: "/subcategory/detail",
    data: {
      miniWallkey,
      type
    }
  })
}