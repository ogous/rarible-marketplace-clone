import Head from 'next/head'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import HeroCover from 'public/hero.png'
import Button from 'components/button'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import { useState } from 'react'
import Modal from 'components/modal'
import SingleTypeButtonImage from 'public/single.png'
import MultiTypeButtonImage from 'public/multi.png'
import ER1155Form from '../components/ER1155Form'
import ER721Form from '../components/ER721Form'

export default function Home() {
  const { status } = useSession()
  const { openConnectModal } = useConnectModal()
  const [isAlertModalOpen, setIsAlertModalOpen] = useState<boolean>(false)
  const [isTypeModalOpen, setIsTypeModalOpen] = useState<boolean>(false)
  const [isER721Open, setIsER721Open] = useState<boolean>(false)
  const [isER1155Open, setIsER1155Open] = useState<boolean>(false)

  const typeModalButtons = [
    {
      image: SingleTypeButtonImage,
      title: 'Single',
      desc: 'If you want to highlight the uniqueness and individuality of your item',
      onClick: () => {
        setIsER721Open(true)
        setIsTypeModalOpen(false)
      }
    },
    {
      image: MultiTypeButtonImage,
      title: 'Multiple',
      desc: 'If you want to highlight the uniqueness and individuality of your item',
      onClick: () => {
        setIsER1155Open(true)
        setIsTypeModalOpen(false)
      }
    }
  ]

  function dismiss() {
    setIsAlertModalOpen(false)
    setIsTypeModalOpen(false)
    setIsER721Open(false)
    setIsER1155Open(false)
  }

  function handleAction() {
    if (status !== 'authenticated' && openConnectModal) {
      openConnectModal()
    } else setIsAlertModalOpen(true)
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

      <Modal
        isOpen={isAlertModalOpen}
        setIsOpen={setIsAlertModalOpen}
        dismiss={dismiss}
        title="Choose collection"
        description="Currently only Ethereum and Polygon ERC-721 & ERC-1155 collections are supported."
      >
        <Button
          className="w-full"
          onClick={() => {
            setIsAlertModalOpen(false)
            setIsTypeModalOpen(true)
          }}
        >
          Create a collection
        </Button>
      </Modal>

      <Modal
        isOpen={isTypeModalOpen}
        setIsOpen={setIsTypeModalOpen}
        dismiss={dismiss}
        title="Choose Type"
        description="Choose “Single” for one of a kind or “Multiple” if you want to sell one collectible multiple times"
      >
        <div className="flex flex-col gap-4">
          {typeModalButtons.map((i) => (
            <button
              className="flex items-center rounded-[16px] border border-white border-opacity-10 p-6 text-start"
              key={i.title + 'type_selection'}
              onClick={i.onClick}
            >
              <Image
                src={i.image}
                alt={i.title}
                className="mr-[34px]"
                width={42}
                height={60}
              />
              <div>
                <span className="text-[22px] font-bold leading-[28px]">
                  {i.title}
                </span>
                <p className="mt-2 text-white text-opacity-60">{i.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </Modal>
      <Modal
        isOpen={isER1155Open}
        setIsOpen={setIsER1155Open}
        title="Collection ERC-1155"
        dismiss={dismiss}
      >
        <ER1155Form />
      </Modal>
      <Modal
        isOpen={isER721Open}
        setIsOpen={setIsER721Open}
        title="Collection ERC-721"
        dismiss={dismiss}
      >
        <ER721Form />
      </Modal>
    </>
  )
}
