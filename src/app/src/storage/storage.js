const KEYS = {
    TOKEN: 'token',
    EXP_DATE: 'expirationDate'
}

const createStorageItem = (key) => {
    return {
        get: () => localStorage.getItem(key),
        set: value => localStorage.setItem(key, value),
        remove: () => localStorage.removeItem(key)
    }
}

export default {
    token: createStorageItem(KEYS.TOKEN),
    expirationDate: createStorageItem(KEYS.EXP_DATE),

    clearAll: () => localStorage.clear(),
}
