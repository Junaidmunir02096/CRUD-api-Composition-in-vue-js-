// composables/useToast.js
import { ref } from 'vue'

const isVisible = ref(false)
const message = ref('')
const type = ref('success')  

const showToast = (msg, toastType = 'success', duration = 3000) => {
  message.value = msg
  type.value = toastType
  isVisible.value = true

  setTimeout(() => {
    isVisible.value = false
  }, 2000)
}

export default function useToast() {
  return {
    isVisible,
    message,
    type,
    showToast
  }
}
