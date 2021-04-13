import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <Layout>
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
            <video className={styles.video} src="/CloudsBlue.mp4" autoPlay loop playsInline muted/>
      </Layout>
  )
}
