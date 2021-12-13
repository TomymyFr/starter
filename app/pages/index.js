import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/App.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yeah i did it</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Navbar/>
      </main>

    </div>
  )
}
