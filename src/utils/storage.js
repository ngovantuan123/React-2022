const getStorage = async (key) => {
  try {
  const jsonValue = localStorage.getItem(key);
    const result = await (jsonValue != null ? JSON.parse(jsonValue) : null);
    return result;
  } catch (e) {
    console.log("getUserToken", e);
    return e;
  }
};

const saveStorage = (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log("saveUserToken", e);
  }
};
export { getStorage, saveStorage };
