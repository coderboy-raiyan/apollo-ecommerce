/* eslint-disable no-prototype-builtins */
function pick<T>(obj: T, keys: (keyof T)[]) {
    const modifiedObj: T = {} as T;

    keys.forEach((key) => {
        if (obj.hasOwnProperty(key)) {
            modifiedObj[key] = obj[key];
        }
    });
    return modifiedObj;
}

export default pick;
