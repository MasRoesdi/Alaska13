import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/landing.module.css'
import dummyImg from '../public/download.png'

export default function Index() {
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
        <div className={styles.about}>
          <h1>ABOUT US</h1>
          <div>
            <div>
              <p>Hello there! We are the thirteenth alumni of Istiqomah Sambas Middle School which is located in Central Java, Indonesia. Within 3 years of togetherness, we have formed a solid relationship within each of our members. As of today, we have parted our ways to reach our own goals.</p>
            </div>
            <div>
              <Image src={dummyImg} alt='/'></Image>
            </div>
          </div>
        </div>
        <div className={styles.rep}>
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
        <div className={styles.act}>
          <h1>OUR ACTIVITIES</h1>
        </div>
        <div className={styles.ach}>
          <h1>OUR MEMBER'S ACHIEVEMENTS</h1>
        </div>
      </main>
    </div>
  )
}
