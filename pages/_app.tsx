import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from 'components/layout'
import { WagmiConfig } from 'wagmi'
import { client, chains } from 'lib/web3/connect'
import { darkTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import { RainbowKitSiweNextAuthProvider } from '@rainbow-me/rainbowkit-siwe-next-auth'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <SessionProvider refetchInterval={0} session={pageProps.session}>
        <RainbowKitSiweNextAuthProvider>
          <RainbowKitProvider
            modalSize="compact"
            chains={chains}
            theme={darkTheme({
              accentColor: '#feda03',
              accentColorForeground: 'black',
              borderRadius: 'medium',
              fontStack: 'system',
              overlayBlur: 'small'
            })}
          >
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </RainbowKitProvider>
        </RainbowKitSiweNextAuthProvider>
      </SessionProvider>
    </WagmiConfig>
  )
}
