export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV?: 'test' | 'development' | 'production'
      IPFS_SWARM_KEY: string
      NEXT_PUBLIC_ETH_CHAIN: string
      ALCHEMY_KEY: string
      NEXTAUTH_SECRET: string
      NEXTAUTH_URL: string
      NEXT_PUBLIC_CONTRACT_ADDRESS: `0x${string}`
    }
  }
}
