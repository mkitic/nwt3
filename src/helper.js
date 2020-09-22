export const getStorageItem = key => {
  return JSON.parse(localStorage.getItem(key))
}

export const setStoreItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const isLiked = imageId => {
  const likes = JSON.parse(localStorage.getItem('currentLikes'))
  if (likes) {
    console.log(imageId)
    return !!(likes.find(el => el.id === imageId))
  } else {
    return false
  }
}

export const getToken = () => getStorageItem('user').token

export const setToken = (token) => {
  localStorage.setItem('user', JSON.stringify({token: token}))
}

export const isLoggedIn = () => {
  return !!localStorage.getItem('user')
}

export const api = {
  post: (path, body, useAuth = false) => fetch(`${process.env.REACT_APP_API_URL}/${path}`, {
    method: 'post',
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      "Authorization": useAuth ? `Bearer ${getToken()}` : undefined
    }
  }).then(res => res.json()),
  get: (path, useAuth = true) => fetch(`${process.env.REACT_APP_API_URL}/${path}`, {
    method: 'get',
    headers: {
      "Content-Type": "application/json",
      "Authorization": useAuth ? `Bearer ${getToken()}` : undefined
    }
  }).then(res => res.json()),
  rawGet: (path) => fetch(path, {
    method: 'get',
  }).then(res => res.json()),
}