'use client'

import { useState } from 'react'

export default function Newsletter() {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setStatus('loading')
        setErrorMessage('')

        try {
            await new Promise((res) => setTimeout(res, 1500))
            setStatus('success')
            setEmail('')
        } catch {
            setStatus('error')
            setErrorMessage('Bir hata oluştu, lütfen tekrar deneyin.')
        }
    }

    return (
        <section className="relative py-16 px-6 sm:px-12 isolate bg-gray-50">
            {/* Arka plan blur gradient */}
            <div aria-hidden="true" className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"><div style={{
                clipPath:
                    'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
            }} className="aspect-577/310 w-[36rem] bg-gradient-to-r from-blue-600 to-green-700 opacity-30"></div></div>
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
            {/* İçerik */}
            <h2 className="mt-2 text-4xl text-center font-bold tracking-tight text-gray-900 sm:text-5xl">
                En son gelişmelerden haberdar olun
            </h2>
            <p className="relative mt-4 max-w-xl mx-auto text-center text-indigo-500">
                Yeni uygulamalar, güncellemeler ve özel fırsatlar için bültenimize abone olun.
            </p>

            <form
                onSubmit={handleSubmit}
                className="relative mt-8 flex max-w-md mx-auto rounded-md bg-white shadow-lg ring-1 ring-white/40"
            >
                <input
                    type="email"
                    name="email"
                    aria-label="E-posta adresiniz"
                    placeholder="E-posta adresiniz"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-auto rounded-l-md border-0 px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex items-center justify-center rounded-r-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === 'loading' ? (
                        <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            ></path>
                        </svg>
                    ) : (
                        'Abone Ol'
                    )}
                </button>
            </form>

            {status === 'success' && (
                <p className="relative mt-4 text-center text-sm text-green-400 font-semibold">Teşekkürler! Abone oldunuz.</p>
            )}
            {status === 'error' && (
                <p className="relative mt-4 text-center text-sm text-red-500 font-semibold">{errorMessage}</p>
            )}
        </section>
    )
}
