import type { Metadata } from 'next' 
import { Poppins } from 'next/font/google'
import './globals.css' 

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Mercator Codex',
  description: 'Business directory application using Next JS, TypeScript, Tailwind, Shadcn, Clerk and Mongo DB via Docker.',
} 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode 
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  ) 
}
