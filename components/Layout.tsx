// components/layout.tsx
import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import Widgets from './widgets'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href='/favicon.ico' />
      </Head>
      <Header />
      <Widgets />
      <main>{children}</main>
      <Footer />
    </>
  )
}
