import { ElMessage } from 'element-plus'

// 复制文本
export const useCopy = (text: string) => {
  // let input = document.createElement('input')
  // input.value = text
  // document.body.appendChild(input)
  // input.select()
  // document.execCommand('copy')
  // document.body.removeChild(input)
  // input.remove()
  navigator.clipboard.writeText(text)
  ElMessage.success('复制成功')
}
