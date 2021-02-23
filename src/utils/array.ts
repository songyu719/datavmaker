/**
 * Created by Liu.Jun on 2020/3/28 10:02 上午.
 */

function merge(target:any, other:any) {
    target.push(...other);
}

function ensure(target:any, item:any) {
    // 只有当前数组不存在此元素时只添加它
    if (target.indexOf(item) === -1) {
        target.push(item);
    }
    return target;
}

function removeAt(target:any, index:number) {
    // 移除数组中指定位置的元素，返回布尔表示成功与否
    return !!target.splice(index, 1).length;
}

// 移除
function remove(target:any, item:any) {
    // 移除数组中第一个匹配传参的那个元素，返回布尔表示成功与否
    const index = target.indexOf(item);
    if (~index) {
        return removeAt(target, index);
    }
    return false;
}

function toMap(target:any, key:any) {
    return target.reduce((preVal:any, curVal:any) => {
        preVal[curVal[key]] = curVal;
        return preVal;
    }, {});
}

// 是否第一个
function isFirst(target:any, item:any) {
    return target.indexOf(item) === 0;
}

// 是否最后一个
function isLast(target:any, item:any) {
    return target.indexOf(item) === target.length - 1;
}

// 通过 index 上移
function moveUpAt(target:any, index:number) {
    if (index === 0) return false;
    const item = target[index];
    const newItems = [item, target[index - 1]];
    return target.splice(index - 1, 2, ...newItems);
}

// 上移动
function moveUp(target:any, item:any) {
    if (isFirst(target, item)) {
        // 不可移动
        return false;
    }

    const index = target.indexOf(item);

    const newItems = [item, target[index - 1]];
    return target.splice(index - 1, 2, ...newItems);
}

// 通过 index 下移动
function moveDownAt(target:any, index:number) {
    if (index === target.length - 1) return false;
    const item = target[index];
    const newItems = [target[index + 1], item];
    return target.splice(index, 2, ...newItems);
}

// 下移动
function moveDown(target:any, item:any) {
    if (isLast(target, item)) {
        // 不可移动
        return false;
    }

    const index = target.indexOf(item);

    const newItems = [target[index + 1], item];
    return target.splice(index, 2, ...newItems);
}

// 复制
// function insert(target, items, index) {
//     return target.splice(index + 1, 0, ...items);
// }

export {
    merge,
    ensure,
    removeAt,
    remove,
    toMap,
    isFirst,
    isLast,
    moveDown,
    moveDownAt,
    moveUp,
    moveUpAt,
};
