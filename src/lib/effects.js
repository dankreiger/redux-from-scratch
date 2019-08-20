export const take = actionType => ({ type: "take", actionType });
export const select = selector => ({ type: "select", selector });
export const call = (fn, ...args) => ({ type: "call", fn, args });
export const put = action => ({ type: "put", action });
export const fork = (saga, ...args) => ({ type: "fork", saga, args });
