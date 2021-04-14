import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <Layout>
          <Head>
            <title>W∆ | Winterdelta | Heartbeam</title>
            <meta name="title" content="W∆ | Winterdelta | Heartbeam"/>
            <meta name="description" content="Researcher + Encompasser + Sonar"/>

            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://www.winterdelta.com"/>
            <meta property="og:title" content="W∆ | Winterdelta | Heartbeam"/>
            <meta property="og:description" content="Researcher + Encompasser + Sonar"/>
            <meta property="og:image" content="/Waves.png"/>

            <meta property="twitter:card" content="/Waves.png"/>
            <meta property="twitter:url" content="https://www.winterdelta.com"/>
            <meta property="twitter:title" content="W∆ | Winterdelta | Heartbeam"/>
            <meta property="twitter:description" content="Researcher + Encompasser + Sonar"/>
            <meta property="twitter:image" content="/Waves.png"/>
          </Head>
            <video className={styles.video} src="/CloudsBlue.mp4" autoPlay loop playsInline muted/>
      </Layout>
  )
}