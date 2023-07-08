'use client'

import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header>
      <Link href="/">
        <Image
          src="https://links.papareact.com/208"
          alt="Logo"
          width={150}
          height={150}
          className="object-contain mr-10"
        />
      </Link>
    </header>
  )
}

export default Header
