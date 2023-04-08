export function createISODateString(date){
  const _dd = date.getDate() + 1

  const dd = _dd < 10 ? `0${_dd}` : _dd
  const mm = date.getMonth() < 10 ? `0${date.getMonth()}`: date.getMonth()
  const yyyy = date.getFullYear()

  return `${yyyy}-${mm}-${dd}`
}