import Head from "next/head";
import Image from 'next/image'
import profileImage from "../public/dev-profile.jpeg"
import Navbar from "../components/navbar"
import Style from "../styles/about.module.css"
import Link from "next/link";

export default function About() {
    return (
        <div>
            <Head>
                <title>Alaska 13 | About the Developers</title>
                <meta name="description" content="A website created for the 13th alumni of istiqomah sambas middle school" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar></Navbar>
            <div className={Style.root}>
                <div>
                    <h1>This website is made by</h1>
                    <Image src={profileImage} className={Style.img} width="256" height="256" alt="Developer Profile Picture"></Image>
                    <h3>Muhammad Rusdiyanto</h3>
                    <Link href="https://github.com/MasRoesdi"><a target="_blank">Github</a></Link>
                </div>
            </div>
        </div>
    )
}