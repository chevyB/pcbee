import { Provider } from 'react-redux'

import '@/app/globals.css'
import { store } from '@/hooks/store'
import Theme from '@/app/theme'
import RouteGuard from '@/components/templates/RouteGuard'
import ToastProvider from '@/components/templates/ToastProvider'

export const metadata = {
  title: 'PCBee ',
  description: 'Ordering Parts System',
}

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <RouteGuard>
        <Theme>
          <ToastProvider>
            <Component {...pageProps} />
          </ToastProvider>
        </Theme>
      </RouteGuard>
    </Provider>
  )
}

export default App
