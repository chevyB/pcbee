import { createContext, useCallback, useState } from 'react'

import Toasts from '@/components/atoms/Toasts'

export const ToastContext = createContext(null)

let count = 1

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([])

  const removeToast = useCallback(
    (id) => {
      setToasts((toasts) => toasts.filter((t) => t.id !== id))
    },
    [setToasts],
  )

  const addToast = useCallback(
    (content) => {
      const id = count++

      setToasts((toasts) => [...toasts, { id, ...content }])

      const timer = setTimeout(() => {
        removeToast(id)
      }, 3000) // delay

      return () => {
        clearTimeout(timer)
      }
    },
   
  )

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <Toasts toasts={toasts} />
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider
