import Head from 'next/head'

import Header from '../components/header/Header'
import Main from '../components/main/Main'

export default function Home({ tips }) {
  return (
    <>
      <Head>
        <title>Coding challenge: Frontend - Maybe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main tips={tips} />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/tips')
  const tips = await res.json()

  return {
    props: {
      tips,
    },
  }
}
