'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Logo2 from '@/public/logo2.jpg';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <Image
              src={Logo2}
              alt="Logo"
              className="h-8 w-auto"
            />
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="size-6" aria-hidden="true" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="/" className="text-sm font-semibold leading-6 text-gray-900">Home</a>
          <a href="#apps" className="text-sm font-semibold leading-6 text-gray-900">Apps</a>
          <a href="#about" className="text-sm font-semibold leading-6 text-gray-900">About</a>
          <a href="#contact" className="text-sm font-semibold leading-6 text-gray-900">Contact</a>
        </PopoverGroup>
      </nav>

      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm bg-white p-6 overflow-y-auto">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <Image
              src={Logo2}
              alt="Logo"
              className="h-8 w-auto"
            />
              
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="size-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6">
            <div className="space-y-4">
              <a href="/" className="block text-base font-semibold text-gray-900 hover:bg-gray-50 rounded-lg px-3 py-2">Home</a>
              <a href="#apps" className="block text-base font-semibold text-gray-900 hover:bg-gray-50 rounded-lg px-3 py-2">Apps</a>
              <a href="#about" className="block text-base font-semibold text-gray-900 hover:bg-gray-50 rounded-lg px-3 py-2">About</a>
              <a href="#contact" className="block text-base font-semibold text-gray-900 hover:bg-gray-50 rounded-lg px-3 py-2">Contact</a>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
