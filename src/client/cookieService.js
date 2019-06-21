import Cookies from 'js-cookie'

export const loadState = () => {
  try {
    return Cookies.get('__session') ? JSON.parse(Cookies.get('__session')) : {}
  } catch (error) {
    console.log(error)
    return {}
  }
}

export const saveState = (state) => {
  try {
    Cookies.set('__session', state)
  } catch (error) {
    console.log(error)
  }
}
