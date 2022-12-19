import Head from "next/head";
import Navbar from "../components/navbar";
import Style from "../styles/members.module.css"

export default function members() {
  return (
    <div>
      <Head>
          <title>Alaska 13 | About the Developers</title>
          <meta name="description" content="A website created for the 13th alumni of istiqomah sambas middle school" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <main>
        <div className={Style.hero}>
          <h1>Members</h1>
          <p>Here are the list of our members sorted by class</p>
        </div>
        <div className={Style.class}>
          <h3>IX A</h3>
        </div>
        <div className={Style.class}>
          <h3>IX B</h3>
        </div>
        <div className={Style.class}>
          <h3>IX C</h3>
        </div>
        <div className={Style.class}>
          <h3>IX D</h3>
        </div>
      </main>
    </div>
  )
}
