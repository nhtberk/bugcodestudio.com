'use client'

import { XMarkIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

type BannerProps = {
  message: string
  ctaText: string
  ctaHref: string
}

export default function Banner({ message, ctaText, ctaHref }: BannerProps) {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-577/310 w-[36rem] bg-gradient-to-r from-blue-600 to-green-700 opacity-30"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-577/310 w-[36rem] bg-gradient-to-r from-blue-600 to-green-700 opacity-30"
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm text-gray-900">{message}</p>
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700"
        >
          {ctaText} <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3"
          onClick={() => setVisible(false)}
        >
          <span className="sr-only">Kapat</span>
          <XMarkIcon className="size-5 text-gray-900" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
