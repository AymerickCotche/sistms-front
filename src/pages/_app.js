
import { wrapper } from '../redux/store';
import { Roboto } from '@next/font/google'
import '../styles/globals.scss';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }) {
  return (
    <main className={roboto.className}>

      <Component {...pageProps}  />
    </main>
  )
}

export default wrapper.withRedux(MyApp);