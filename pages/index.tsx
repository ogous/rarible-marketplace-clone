import Head from 'next/head'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import HeroCover from 'public/hero.png'
import Button from 'components/button'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import { useState } from 'react'
import Modal from 'components/modal'

export default function Home() {
  const { status } = useSession()
  const { openConnectModal } = useConnectModal()
  const [isAlertModalOpen, setIsAlertModalOpen] = useState<boolean>(false)

  function handleAction() {
    if (status !== 'authenticated' && openConnectModal) {
      openConnectModal()
    }
  }

  return (
    <>
      <Head>
        <title>
          Create your NFT community marketplace with Rarible | Rarible
        </title>
        <meta
          name="description"
          content="Create your NFT community marketplace with Rarible"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center">
        <div className="mb-8">
          <h1 className="mb-4 text-center text-[68px] font-bold leading-[78px] text-white">
            Create your own NFT <br /> marketplace for free
          </h1>
          <h2 className="text-center text-[28px] leading-[36px] text-white text-opacity-60">
            Create a liquid, on-brand marketplace for your ETH &
            <br /> Polygon collections — without writing code
          </h2>
        </div>
        <Button onClick={handleAction}>Create marketplace</Button>
        <Image
          src={HeroCover}
          alt="Create your own NFT with Rarible"
          className="w-full"
          loading="lazy"
          priority={false}
        />
      </div>
      {isAlertModalOpen ? (
        <Modal
          isOpen={isAlertModalOpen}
          setIsOpen={setIsAlertModalOpen}
          title="Choose collection"
        >
          <div>Sometinh</div>
        </Modal>
      ) : null}
    </>
  )
}
