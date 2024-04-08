export const setItem = (key: string, data: any) => {
    try {
        localStorage.setItem(key, data)
    } catch (error) {
        console.log('Error saveing data');
    }
}

export const getItem = (key: string) => {
    try {
        return localStorage.getItem(key)
    } catch (error) {
        console.log('Error getting data');
    }
}

export const removeItem = (key: string) => {
    try {
        localStorage.removeItem(key)
    } catch (error) {
        console.log('Error removing data');
    }
}