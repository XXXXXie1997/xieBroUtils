/**
 * 对比两个数组，返回对比结果。
 * @param {any[]} oldArray - 旧数组
 * @param {any[]} newArray - 新数组
 * @param {string|null} [diffKey=null] - 可选，如果传入diffkey将按照对象数组进行处理，否则按照普通数组处理
 * @returns {{ unchanged: any[], added: any[], removed: any[], modified: any[] }} 得到未改动、新增、删除、修改结果数组
 */
export function diff(oldArray: any[], newArray: any[], diffKey = null) {
  if (!diffKey) {
    // 如果不传key将按照基础数组进行处理
    const oldSet = new Set(oldArray);
    const newSet = new Set(newArray);

    const unchanged = newArray.filter((item) => oldSet.has(item));
    const added = newArray.filter((item) => !oldSet.has(item));
    const removed = oldArray.filter((item) => !newSet.has(item));
    const modified: any[] = []; // 基础数组无法判断修改项

    return { unchanged, added, removed, modified };
  } else {
    // 如果传入了key则按照对象数组来处理，并根据key进行diff算法
    const oldMap = new Map(oldArray.map((item) => [item[diffKey], item]));
    const newMap = new Map(newArray.map((item) => [item[diffKey], item]));

    const unchanged = newArray.filter((item) => {
      const oldItem = oldMap.get(item[diffKey]);
      return oldItem && JSON.stringify(oldItem) === JSON.stringify(item);
    });

    const added = newArray.filter((item) => !oldMap.has(item[diffKey]));
    const removed = oldArray.filter((item) => !newMap.has(item[diffKey]));

    const modified = newArray.filter((item) => {
      const oldItem = oldMap.get(item[diffKey]);
      return oldItem && JSON.stringify(oldItem) !== JSON.stringify(item);
    });

    return { unchanged, added, removed, modified };
  }
}
