// 将时间戳换算为正常的时间
export default function getTime(time){
  const data = new Date(time) 
  const year = data.getFullYear()
  const month = data.getMonth() + 1 >= 10 ? data.getMonth() + 1 : '0' + (data.getMonth() + 1)
  const date = data.getDate() >= 10 ? data.getDate() : '0' + data.getDate()
  return `${year}-${month}-${date}`
}