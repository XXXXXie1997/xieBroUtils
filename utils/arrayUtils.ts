const arrayDiff = (
  oldArray: any[],
  newArray: any[],
  diffKey: string | null = null
): { intersection: any[]; added: any[]; removed: any[] } => {
  if (!diffKey) {
    // 如果不传key将按照基础数组进行处理
    const oldSet = new Set(oldArray);
    const newSet = new Set(newArray);

    const intersection = newArray.filter((item) => oldSet.has(item));
    const added = newArray.filter((item) => !oldSet.has(item));
    const removed = oldArray.filter((item) => !newSet.has(item));

    return { intersection, added, removed };
  } else {
    // 如果传入了key则按照对象数组来处理，并根据key进行diff算法
    const oldKeys = new Set(oldArray.map((item) => item[diffKey]));
    const newKeys = new Set(newArray.map((item) => item[diffKey]));

    const intersection = newArray.filter((item) => oldKeys.has(item[diffKey]));
    const added = newArray.filter((item) => !oldKeys.has(item[diffKey]));
    const removed = oldArray.filter((item) => !newKeys.has(item[diffKey]));

    return { intersection, added, removed };
  }
};

export const array = {
  diff: arrayDiff,
};
