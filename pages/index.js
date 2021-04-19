import Head from "next/head";
import Layout from "../components/layout";
import styles from "../styles/Index.module.css";
import Encompasser from "../components/encompasser";
import Leaves from "../components/leaves";
import Multios from "../components/multios";
import Numeric from "../components/numeric";
import Link from "next/link";
import Buttons from "../components/buttons";
import AudioPlayer from "../components/audioplayer";
import tracks from "../data/tracks";

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
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;1,200&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Vibes&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.compassBar}>
        <div className={styles.compassBarText}>
          <Link href="https://winterdelta.medium.com/">
            <div>LEAVES OF LOTHLORIÉN | CIVILISATION UPON A CITY: NYC</div>
          </Link>
          {/* <Link href="https://www.instagram.com/solarperimeter/">
            <div>SECURING THE SOLAR PERIMETER</div>
          </Link>
          <div>VAR BY SOLILOQUY</div>
          <div>VOYAGER77 FAN CLUB</div> */}
        </div>
      </div>

      <div className={styles.navigator}>
        <div className={styles.navigatorWidget}>
          <div className={styles.navigatorWidgetTitle}>ENCOMPASSER</div>
          <div className={styles.navigatorWidgetTitle}>方位磁針</div>
          <div className={styles.navigatorWidgetText}>
            <div>HOUSES @ NORTHERN QUARTER ON THE VIDEO-TELEPHONE</div>
          </div>
        </div>
      </div>

      <div className={styles.os}>
        <Encompasser />
        {/* <Numeric /> */}
        <Multios />
      </div>

      {/* <AudioPlayer tracks={tracks} /> */}

      <div className={styles.videoContainer}>
        <video
          className={styles.video}
          src="/WAYMAKER.mp4"
          autoPlay
          loop
          playsInline
          muted
          poster="/Waves.jpg"
        />
      </div>
    </Layout>
  );
}
