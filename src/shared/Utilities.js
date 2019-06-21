/*  Turns an array of objects into an object with an idKey as the top level key for a value.

    Example:
    const array = [{ username: 'ryan', email: 'warner.ryan@gmail.com' }, { username: 'chris', email: 'chris@gmail.com' }]
    const normalized = normalizeArray(array, 'username')
    console.log(normalized)
    {
      ryan: { username: 'ryan', email: 'warner.ryan@gmail.com' },
      chris: { username: 'chris', email: 'chris@gmail.com' }
    }
*/
export const normalizeArray = (array, idKey) => {
  return array.reduce((accumulator, currentValue) => {
    const id = currentValue[idKey]
    accumulator[id] = currentValue
    return accumulator
  }, {})
}

/* This function mimics https://facebook.github.io/immutable-js/docs/#/setIn
   It lets us set the value of a nested key in an object by passing the full path as an array (fullKey)
   or a string if the fullKey is not nested.
*/
export const setIn = (obj, fullKey, value) => {
  if (typeof fullKey === 'string') fullKey = [fullKey]
  const result = obj = Object.assign({}, obj)
  for (let index = 0; index < fullKey.length; index++) {
    const key = fullKey[index]
    if (index === fullKey.length - 1) {
      obj[key] = value
    } else if (obj[key] == null) {
      obj[key] = {}
      obj = obj[key]
    } else {
      obj[key] = Object.assign({}, obj[key])
      obj = obj[key]
    }
  }
  return result
}

// Null safe method to retrive nested object property values
export const getIn = (nestedObj, pathArr) => {
  return pathArr.reduce((obj, key) =>
    (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj)
}

// http://emailregex.com/
export const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export const USERNAME_REGEX = /^[a-zA-Z0-9_-]*$/
