import Head from 'next/head'
import styles from '../styles/Home.module.css'
import about from '../data/about.json'
import links from '../data/links.json'
import socials from '../data/social.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faInstagram, faMedium, faLinkedin, faStrava } from '@fortawesome/free-brands-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mark Woosey</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://use.typekit.net/goj1swf.css"></link>
        <meta name = "twitter:card" content = "summary_large_image" />
        <meta name = "twitter:site" content = "@mrkwse" />
        <meta name = "twitter:title" content = "Mark Woosey" />
        <meta name = "twitter:description" content = "Socially distanced software engineer @ <a href={'http://mclaren.racing'}>McLaren</a>, technophile, gig-goer, bobblehat, and fair-weather cyclist."/>
        <meta name = "description" content = "Socially distanced software engineer @ <a href={'http://mclaren.racing'}>McLaren</a>, technophile, gig-goer, bobblehat, and fair-weather cyclist."/>
        <meta name = "twitter:image" content = "https://mrkw.se/1x/card.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Mark Woosey
        </h1>

        <p className={styles.description}>
          Socially distanced software engineer @ <a href={'http://mclaren.racing'}>McLaren</a>, technophile, gig-goer, bobblehat, and fair-weather cyclist.
        </p>

        <div className={styles.list}>
          {
            links.map(link => (
              <a href={link.url} className={styles.card} key={link.name}>
                <div className={styles.cardText}>
                  <h2>{link.name}</h2>
                  <p>{link.description}</p>
                </div>
                <div className={styles.cardIcon}>
                  <FontAwesomeIcon icon={faChevronRight}/>
                </div>
              </a>
            ))
          }
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href={`https://www.twitter.com/${socials.twitter}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FontAwesomeIcon icon={faTwitter} className={styles.logo} />
        </a>
        <a
          href={`https://www.instagram.com/${socials.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} className={styles.logo} />
        </a>
        <a
          href={`https://www.github.com/${socials.github}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} className={styles.logo} />
        </a>
        <a
          href={`https://www.medium.com/@${socials.medium}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Medium"
        >
          <FontAwesomeIcon icon={faMedium} className={styles.logo} />
        </a>
        <a
          href={`https://www.linkedin.com/in/${socials.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} className={styles.logo} />
        </a>
        <a
          href={`https://www.strava.com/athletes/${socials.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Strava"
        >
          <FontAwesomeIcon icon={faStrava} className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
