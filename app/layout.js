import Link from 'next/link'

export default function RootLayout({ children }) {
  const rand = Math.floor(Math.random() * 100)
  return (
    <html>
      <head></head>
      <body style={{"border":"10px solid red"}}>
        <h4>Random number {rand}</h4>
        <nav>
            <Link href="/">Home</Link>{' '}
             <Link href="/green">Green</Link>{' '}
             <Link href="/blue">Blue</Link> 
        </nav>
        {children}
      </body>
    </html>
  )
}
