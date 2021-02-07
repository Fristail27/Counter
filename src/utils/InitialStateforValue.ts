const initialStateforValue = (
  keyValue: string,
  defaultValue: number
): number => {
  const fromLocStor = JSON.parse(
    localStorage.getItem('localStorageValues') || '{}'
  );
  if (fromLocStor[keyValue]) {
    return Number.parseInt(fromLocStor[keyValue], 10);
  }
  return defaultValue;
}; // принимает строку с названием ключа объекта и возвращает либо значение из локалСторедж, или если его нет то 0/

export default initialStateforValue;
