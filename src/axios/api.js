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
    url: 'getimgcategory/',
    data
  })
}
