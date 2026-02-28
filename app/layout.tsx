import type { Metadata } from 'next' 
import { Poppins } from 'next/font/google'
import '../assets/globals.css'
import { ThemeProvider } from '@/context/theme-provider'
import TopNav from '@/components/nav/top-nav'
import { ClerkProvider } from '@clerk/nextjs'
import { BusinessProvider } from '@/context/business'

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
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <body className={poppins.className}>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem
            disableTransitionOnChange
          >
            <BusinessProvider>
              <TopNav />
              {children}
            </BusinessProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  ) 
}
