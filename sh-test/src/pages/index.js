import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Sperm Bank</title>
        <meta name="description" content="Sperm Bank" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/egg.png"
            alt="Logo"
            width={80}
            height={80}
            priority
          />
          <span className={styles.title}>Sperm Bank</span>
        </div>
      </main>
    </>
  )
}
