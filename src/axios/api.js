import service from './request.js'

export const getLunBo = data => {
  return service({
    url: 'getlunbo'
  })
}

export const getnewslists = data => {
  return service({
    url: 'getnewslist'
  })
}

export const getnewsinfo = data => {
  return service({
    url: 'getnew/' + data.newid,
    data
  })
}

export const getimgcategory = data => {
  return service({
    url: 'getimgcategory',
    data
  })
}

export const getimages = data => {
  return service({
    url: 'getimages/' + data.cateid,
    data
  })
}

export const getimageInfo = data => {
  return service({
    url: 'getimageInfo/' + data.imgid,
    data
  })
}

export const getthumimages = data => {
  return service({
    url: 'getthumimages/' + data.imgid,
    data
  })
}
// getgoods?pageindex=number
export const getgoods = data => {
  return service({
    url: 'getgoods?pageindex' + data.pageindex,
    data
  })
}
// goods/getdesc/:id
export const getgoodsdesc = data => {
  return service({
    url: 'goods/getdesc/' + data.id,
    data
  })
}
//

export const getgoodsinfo = data => {
  return service({
    url: 'goods/getinfo/' + data.id,
    data
  })
}
