import { Dialog, Transition } from '@headlessui/react'
import { Fragment, Dispatch } from 'react'

interface IModal {
  title?: string
  children: JSX.Element
  isOpen: boolean
  setIsOpen: Dispatch<boolean>
}

const Modal = ({ children, isOpen, title, setIsOpen }: IModal) => {
  function closeModal() {
    setIsOpen(false)
  }

  // function openModal() {
  //   setIsOpen(true);
  // }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="bg-bg fixed inset-0 bg-opacity-80" />
        </Transition.Child>

        <div className="fixed inset-0 mt-14 overflow-y-auto">
          <div className="flex min-h-full items-start justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="primary max-[380px] bg-bg transform overflow-hidden rounded-2xl border border-white border-[rgba(255,255,255,0.1)] border-opacity-60 p-6 text-left align-middle shadow-xl transition-all">
                <div className={'mb-5 flex items-center text-white'}>
                  <div className="flex items-center space-x-3 md:space-x-6">
                    {title && (
                      <Dialog.Title
                        as="h3"
                        className="text mt-4 w-2/3 text-start text-[18px] font-bold text-white md:mt-0 md:w-full md:text-[24px]"
                      >
                        {title}
                      </Dialog.Title>
                    )}
                  </div>
                </div>
                <div>{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal
