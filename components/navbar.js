import Link from "next/link";
import Style from "../styles/navbar.module.css";

export default function navbar() {

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        document.getElementById('navbar').classList.add(Style.scrolled)
      }
      else {
        document.getElementById('navbar').classList.remove(Style.scrolled)
      }
    })
  }

  return (
    <div className={Style.nav} id="navbar">
        <h3>Alaska &apos;13</h3>
        <div>
            <Link href="/">Home</Link>
            <Link href="/members">Members</Link>
            <Link href="/about">About</Link>
        </div>
    </div>
  )
}
