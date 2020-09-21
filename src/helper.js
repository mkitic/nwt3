
export const getStorageItem = key => {
  console.log(localStorage.getItem(key))
  return JSON.parse(localStorage.getItem(key))
}

