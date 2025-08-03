export default function Hero() {
    return (
        <section className="bg-white py-24 sm:py-32" id="home">
            <div className="mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:justify-between lg:px-8 lg:gap-4">
                {/* Left: Text Section */}
                <div className="max-w-2xl text-center lg:text-left">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Uygulamalarımızla Mobil Deneyimi Yeniden Tanımlayın
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Modern, hızlı ve kullanıcı dostu mobil uygulamalar geliştiriyoruz. Yeni projelerimizden haberdar olmak için bizi takip edin!
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                        <a
                            href="#apps"
                            className="rounded-md bg-black px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
                        >
                            Uygulamalara Göz At
                        </a>
                        <a href="#about" className="text-sm font-semibold text-gray-900">
                            Hakkımızda <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>

                {/* Right: Phone Mockups */}
                <div className="relative mt-16 flex justify-center lg:mt-0 lg:justify-end gap-6">
                    {/* Phone 1 */}
                    <div className="relative w-[280px] h-[560px] rounded-[2.5rem] border-8 border-black bg-black shadow-xl overflow-hidden">
                        <img
                            src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                            alt="App 1 preview"

                            className="object-cover"
                        />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-2 w-24 h-5 rounded-full bg-gray-900/70" />
                    </div>

                    {/* Phone 2 */}
                    <div className="relative w-[280px] h-[560px] rounded-[2.5rem] border-8 border-black bg-black shadow-xl overflow-hidden hidden sm:block">
                        <img
                            src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                            alt="App 2 preview"

                            className="object-cover"
                        />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-2 w-24 h-5 rounded-full bg-gray-900/70" />
                    </div>

                    {/* Phone 3 (optional video/gif) */}
                    <div className="relative w-[280px] h-[560px] rounded-[2.5rem] border-8 border-black bg-black shadow-xl overflow-hidden hidden lg:block">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src="/app-preview-3.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-2 w-24 h-5 rounded-full bg-gray-900/70" />
                    </div>
                </div>
            </div>
        </section>
    );
}