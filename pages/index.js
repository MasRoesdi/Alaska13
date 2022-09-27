import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/landing.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alaska 13 | Welcome</title>
        <meta name="description" content="A website created for the 13th alumni of istiqomah sambas middle school" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.hero}>
          <div>
            <p>WELCOME TO</p>
            <h1>ALASKA 13</h1>
            <pre>The thirteenth alumni of <a href='http://www.smpistiqomahsambaspbg.sch.id/' target='_blank' rel='noreferrer nofollow'>Istiqomah Sambas Middle School</a></pre>
          </div>
        </div>
        <div className={styles.content}>
          <h1>OUR REPRESENTATIVES</h1>
          <div>
            <div>
              <h5>Jundi</h5>
              <pre>Ex Chairman of the Student Body</pre>
            </div>
            <div>
              <h5>Fani</h5>
              <pre>Ex Vice Chairman of the Student Body</pre>
            </div>
            <div>
              <h5>Noenoe</h5>
              <pre>Ex Treasurer of the Student Body</pre>
            </div>
          </div>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </main>
    </div>
  )
}
