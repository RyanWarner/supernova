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
    Cookies.set('__session', state, { expires: 365 })
  } catch (error) {
    console.log(error)
  }
}

export const deleteCookie = () => {
  try {
    Cookies.remove('__session')
  } catch (error) {
    console.log(error)
  }
}
