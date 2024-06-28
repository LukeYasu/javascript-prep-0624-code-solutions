/* exported toObject */
function toObject(keyValuePair) {
  let object = {};
  const key = keyValuePair[0];
  const value = keyValuePair[1];
  object[key] = value;
  return object;
}
