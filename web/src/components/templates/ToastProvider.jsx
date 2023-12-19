import { createContext, useCallback, useState } from 'react'

import Toasts from '@/components/atoms/Toasts'

export const ToastContext = createContext(null)

let count = 1

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([])

  const addToast = useCallback(
    (content) => {
      const id = count++

      setToasts((toasts) => [...toasts, { id, ...content }])

      const timer = setTimeout(() => {
        (id)
      }, 3000) // delay

      return () => {
        clearTimeout(timer)
      }
    },
    [setToasts],
  )

  return (
    <ToastContext.Provider value={{ addToast }}>
      <Toasts toasts={toasts} />
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider
