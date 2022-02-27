// 驼峰命名法 => -连接
export const toLine = (value: string) => {
  // $1 小括号里面的小正则 捕获到的内容
  return value.replace(/(A-Z)g/, '-$1').toLocaleLowerCase()
}
