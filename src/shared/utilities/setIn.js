/* This function mimics https://facebook.github.io/immutable-js/docs/#/setIn
   It lets us set the value of a nested key in an object by passing the full path as an array (fullKey)
   or a string if the fullKey is not nested.
*/
export default (obj, fullKey, value) => {
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
