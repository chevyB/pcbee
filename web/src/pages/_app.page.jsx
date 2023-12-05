import { Provider } from 'react-redux'

import '@/app/globals.css'
import Theme from '@/app/theme'
import { store } from '@/hooks/store'

export const metadata = {
  title: 'PCBee ',
  description: 'Ordering Parts System',
}

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </Provider>
  )
}

export default App
