import { Inter } from 'next/font/google'

const font = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={font.className}>
      <h2>Digis Support</h2>
    </main>
  )
}
