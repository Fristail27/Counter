const initialState = (keyValue: string, defaultValue: number) => {
    const fromLocStor = JSON.parse(localStorage.getItem("localStorageValues") || "{}")
    if (fromLocStor[keyValue]) {
        return Number.parseInt(fromLocStor[keyValue])
    } else {
        return defaultValue
    }
}; //фяк принимает строку с названием ключа объекта и возвращает либо значение из локалСторедж, или если его нет то 0/

export default initialState