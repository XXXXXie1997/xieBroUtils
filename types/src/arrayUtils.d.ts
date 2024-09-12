/**
 * 对比两个数组，返回对比结果。
 * @param {any[]} oldArray - 旧数组
 * @param {any[]} newArray - 新数组
 * @param {string|null} [diffKey=null] - 可选，如果传入diffkey将按照对象数组进行处理，否则按照普通数组处理
 * @returns {{ unchanged: any[], added: any[], removed: any[], modified: any[] }} 得到未改动、新增、删除、修改结果数组
 */
export declare function diff(oldArray: any[], newArray: any[], diffKey?: null): {
    unchanged: any[];
    added: any[];
    removed: any[];
    modified: any[];
};
