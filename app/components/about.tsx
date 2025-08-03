export default function About() {
  return (
    <section className="bg-white py-24 sm:py-32" id="about">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">Hakkımızda</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Mobil Deneyimi Şekillendiriyoruz
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Biz, kullanıcı odaklı mobil uygulamalar geliştiren bağımsız bir yazılım stüdyosuyuz.
          Misyonumuz, günlük hayatta işleri kolaylaştıran ve insanların hayatına değer katan çözümler üretmektir.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">⚡ Hızlı ve Modern</h3>
            <p className="mt-2 text-sm text-gray-600">
              En güncel teknolojilerle performans odaklı uygulamalar geliştiriyoruz.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">📱 Platformlar Arası</h3>
            <p className="mt-2 text-sm text-gray-600">
              Flutter sayesinde Android ve iOS platformlarında tutarlı deneyim sunuyoruz.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">🔒 Güvenli ve Ölçeklenebilir</h3>
            <p className="mt-2 text-sm text-gray-600">
              Uygulamalarımız güvenlik ön planda tutularak ölçeklenebilir mimaride geliştirilir.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-sm text-gray-500">
            Daha fazlası için bizimle iletişime geçmekten çekinmeyin.
          </p>
        </div>
      </div>
    </section>
  );
}