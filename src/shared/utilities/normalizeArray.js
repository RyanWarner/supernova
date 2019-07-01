/*  Turns an array of objects into an object with an idKey as the top level key for a value.

    Example:
    const array = [{ username: 'ryan', email: 'warner.ryan@gmail.com' }, { username: 'laith', email: 'laith@gmail.com' }]
    const normalized = normalizeArray(array, 'username')
    console.log(normalized)
    {
      ryan: { username: 'ryan', email: 'warner.ryan@gmail.com' },
      chris: { username: 'laith', email: 'laith@gmail.com' }
    }
*/
export default (array, idKey) => {
  return array.reduce((accumulator, currentValue) => {
    const id = currentValue[idKey]
    accumulator[id] = currentValue
    return accumulator
  }, {})
}
