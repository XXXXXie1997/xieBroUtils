export function format(date: Date, format: string = "YYYY-MM-DD HH:mm:ss") {
  if (!date) {
    return console.warn("[storage-utils]: date.format方法未提供时间");
  }
  const localTime = new Date(
    date.toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" })
  );

  const map: { [key: string]: string } = {
    YYYY: localTime.getFullYear().toString(),
    MM: ("0" + (localTime.getMonth() + 1)).slice(-2),
    DD: ("0" + localTime.getDate()).slice(-2),
    HH: ("0" + localTime.getHours()).slice(-2),
    mm: ("0" + localTime.getMinutes()).slice(-2),
    ss: ("0" + localTime.getSeconds()).slice(-2),
  };

  return format.replace(/YYYY|MM|DD|HH|mm|ss/g, (matched) => map[matched]);
}
