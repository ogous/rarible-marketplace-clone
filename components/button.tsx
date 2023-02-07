import Link from 'next/link'
import clsx from 'clsx'
import React, { HTMLAttributeAnchorTarget } from 'react'
import Loader from './loader'

interface IHref {
  href: string
  onClick?: never
  target?: HTMLAttributeAnchorTarget
}
interface IClick {
  href?: never
  onClick?: () => void
  target?: never
  type?: string
}

interface IButton {
  className?: string
  children: React.ReactNode | string
  loading?: boolean
  disabled?: boolean
}

const Button = ({
  href,
  onClick,
  className,
  children,
  loading = false,
  disabled = false,
  target = '_self'
}: IButton & (IHref | IClick)) => {
  const active = !disabled && !loading
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    if (onClick instanceof Function && active) {
      e.preventDefault()
      onClick()
    }
    if (!active) {
      e.preventDefault()
    }
  }

  const Wrapper = href
    ? Link
    : (props: React.HTMLAttributes<HTMLButtonElement>) =>
        React.createElement('button', props)

  const activeClasses = 'bg-white text-layer'
  const disabledClasses = 'bg-gray-700 text-gray-400'

  return (
    <Wrapper
      href={active && href ? href : ''}
      className={clsx(
        className,
        active ? activeClasses : disabledClasses,
        'flex items-center justify-center rounded-[16px] px-[22px] py-[10px] text-[16px] font-bold leading-[56px]'
      )}
      target={target}
      onClick={handleClick}
    >
      {!loading ? null : <Loader />}

      {children}
    </Wrapper>
  )
}

export default Button
