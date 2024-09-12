export function getLocal(key = ""): any {
  if (!key) {
    return console.warn("[localStorageUtils]: local.get方法未提供键名");
  }
  const localStr = localStorage.getItem(key) || "";
  return JSON.parse(localStr);
}

export function setLocal(key = "", value: any = null): void {
  if (!key) {
    return console.warn("[localStorageUtils]: local.set方法未提供键名");
  }
  localStorage.setItem(key, value);
}
export function getSession(key = ""): any {
  if (!key) {
    return console.warn("[sessionStorageUtils]: session.get方法未提供键名");
  }
  const sessionStr = sessionStorage.getItem(key) || "";
  return JSON.parse(sessionStr);
}

export function setSession(key = "", value: any = null): void {
  if (!key) {
    return console.warn("[sessionStorageUtils]: session.set方法未提供键名");
  }
  sessionStorage.setItem(key, value);
}
