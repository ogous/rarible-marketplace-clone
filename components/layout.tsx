import clsx from 'clsx'
import { Inter } from '@next/font/google'
import { Toaster } from 'react-hot-toast'
import Header from 'components/header'
import Footer from 'components/footer'

const inter = Inter({
  variable: '--font-inter',
  weight: ['400', '700', '900'],
  subsets: ['latin']
})

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <div
      className={clsx(
        inter.variable,
        'flex min-h-screen flex-col bg-layer text-white'
      )}
    >
      <Toaster
        toastOptions={{
          style: {}
        }}
      />
      <Header />
      <main className="flex flex-1 flex-col items-center">{children}</main>
      <Footer />
    </div>
  )
}
