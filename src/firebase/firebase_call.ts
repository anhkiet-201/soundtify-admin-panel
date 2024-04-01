const call =async <T>(func: () => Promise<T>) : Promise<T> => {
    try {
        return await Promise.resolve().then(func)
    } catch(error) {
        throw error
    }
}