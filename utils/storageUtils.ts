const getLocal = (key = ""): any => {
  if (!key) {
    return console.warn("[storage-utils]: local.get方法未提供键名");
  }
  const localStr = localStorage.getItem(key) || "";
  return JSON.parse(localStr);
};

const getSession = (key = ""): any => {
  if (!key) {
    return console.warn("[storage-utils]: session.get方法未提供键名");
  }
  const sessionStr = sessionStorage.getItem(key) || "";
  return JSON.parse(sessionStr);
};

const setLocal = (key = "", value: any = null): void => {
  if (!key) {
    return console.warn("[storage-utils]: local.set方法未提供键名");
  }
  localStorage.setItem(key, value);
};

const setSession = (key = "", value: any = null): void => {
  if (!key) {
    return console.warn("[storage-utils]: session.set方法未提供键名");
  }
  sessionStorage.setItem(key, value);
};

export const local = {
  get: getLocal,
  set: setLocal,
};

export const session = {
  get: getSession,
  set: setSession,
};
