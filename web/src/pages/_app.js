import '@/app/globals.css'
import Theme from '@/app/theme'

export const metadata = {
  title: 'PCBee ',
  description: 'Ordering Parts System',
}

const App = ({ Component, pageProps }) => {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  )
}

export default App
