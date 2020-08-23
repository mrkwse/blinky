import Head from 'next/head'
import styles from '../styles/Home.module.css'
import links from '../data/links.json'
import socials from '../data/social.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faInstagram, faMedium, faLinkedin, faStrava } from '@fortawesome/free-brands-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.png" />
        {/* <link rel="stylesheet" href="https://use.typekit.net/cgl1iit.css"></link> */}
        <link rel="stylesheet" href="https://use.typekit.net/goj1swf.css"></link>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Mark Woosey
        </h1>

        <p className={styles.description}>
          Socially distanced software engineer @ <a href={'http://mclaren.racing'}>McLaren</a>, technophile, gig-goer, bobblehat, and moderate cyclist.
        </p>

        <div className={styles.list}>
          {
            links.map(link => (
              <a href={link.url} className={styles.card} key={link.name}>
                <div className={styles.cardText}>
                  <h3>{link.name}</h3>
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
        >
          <FontAwesomeIcon icon={faTwitter} className={styles.logo} />
        </a>
        <a
          href={`https://www.instagram.com/${socials.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className={styles.logo} />
        </a>
        <a
          href={`https://www.github.com/${socials.github}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className={styles.logo} />
        </a>
        <a
          href={`https://www.medium.com/@${socials.medium}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faMedium} className={styles.logo} />
        </a>
        <a
          href={`https://www.linkedin.com/in/${socials.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className={styles.logo} />
        </a>
        <a
          href={`https://www.strava.com/athletes/${socials.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faStrava} className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
