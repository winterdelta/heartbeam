import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/Index.module.css";
import Encompasser from "../components/encompasser";
import Leaves from '../components/leaves';

export default function Home() {
  return (
    <Layout>
      <Head>
          <title>W∆ | Winterdelta | Heartbeam</title>
          <meta name="title" content="W∆ | Winterdelta | Heartbeam" />
          <meta name="description" content="Researcher + Encompasser + Sonar" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.winterdelta.com" />
          <meta property="og:title" content="W∆ | Winterdelta | Heartbeam" />
          <meta
            property="og:description"
            content="Researcher + Encompasser + Sonar"
          />
          <meta property="og:image" content="/Waves.png" />
          <meta property="twitter:card" content="/Waves.png" />
          <meta property="twitter:url" content="https://www.winterdelta.com" />
          <meta property="twitter:title" content="W∆ | Winterdelta | Heartbeam" />
          <meta
            property="twitter:description"
            content="Researcher + Encompasser + Sonar"
          />
          <meta property="twitter:image" content="/Waves.png" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@1,100&display=swap"
            rel="stylesheet"
          />
      </Head>
      <video
        className={styles.video}
        src="/CloudsBlue.mp4"
        autoPlay
        loop
        playsInline
        muted
      />

      <div className={styles.os}>
        <Encompasser />
      </div>
    </Layout>
  );
}
