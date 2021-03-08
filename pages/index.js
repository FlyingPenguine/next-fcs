import Head from 'next/head'
import styles from '../styles/Home.module.css'
import FCS from '@amazyyy/fcs'
const acceptFile = (file) => {
  const reader = new FileReader()
  console.log('file just upload', file)
  reader.onabort = () => console.log('file reading was aborted')
  reader.onerror = () => console.log('file reading has failed')
  reader.onload = () => {
    console.log('file on load')
  // Do whatever you want with the file contents
    // console.log('reader', reader)
    // arrayBuffer
    const binaryStr = reader.result
    // console.log('binaryStr', binaryStr)
    const buffer = Buffer.from(binaryStr, 'binary')
    // console.log('buffer', buffer)
    const FCSfile = new FCS({}, buffer)
    console.log('FCSfile', FCSfile)
  }
  console.log('file', file)
  reader.readAsArrayBuffer(file)
}
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.jssss2</a>
        </h1>
        <form>
          <input type='file' onChange={(e) => acceptFile(e.target.files[0])} />
          <input type='text' onChange={(e) => console.log(e.target.value)} />
        </form>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
      </main>
    </div>
  )
}
