import { List } from "./List.js";

export function randList(n, sort = false) {
    let randNums = [];
    for (let i = 0; i < n; i++) {
        const randNum = Math.round(Math.random() * 200 - 100);
        randNums.push(randNum);
    }
    const randList = new List();
    if (sort) randNums.sort((a, b) => { return a - b })
    randList.append(...randNums);
    return randList;
}
