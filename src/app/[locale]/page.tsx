import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 pt-32 pb-20 sm:px-6 lg:px-8 text-center bg-gradient-to-br from-neutral-50 to-neutral-200 dark:from-neutral-900 dark:to-neutral-950 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-6 leading-tight">
            {t("title")}
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-neutral-600 dark:text-neutral-300 mx-auto mb-10 leading-relaxed">
            {t("subtitle")}
          </p>
          <div className="mt-8 flex justify-center">
            <button className="px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold text-lg shadow-lg hover:bg-indigo-700 hover:shadow-indigo-500/30 transform hover:-translate-y-1 transition-all duration-200 ease-out focus:ring-4 focus:ring-indigo-500/50">
              {t("cta")}
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
              {t("featuresTitle")}
            </h2>
            <div className="mt-2 w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:shadow-xl hover:border-indigo-100 dark:hover:border-indigo-900/50 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                {t("feature1Title")}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {t("feature1Desc")}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:shadow-xl hover:border-purple-100 dark:hover:border-purple-900/50 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                {t("feature2Title")}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {t("feature2Desc")}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 hover:shadow-xl hover:border-pink-100 dark:hover:border-pink-900/50 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                {t("feature3Title")}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {t("feature3Desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Stats Section */}
      <section className="py-20 bg-indigo-600 dark:bg-indigo-900 border-y border-indigo-700 dark:border-indigo-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">{t("statsTitle")}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-indigo-500/50 dark:divide-indigo-800/50">
            <div>
              <p className="text-4xl font-extrabold text-white">{t("stat1Num")}</p>
              <p className="mt-2 text-indigo-200">{t("stat1Desc")}</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-white">{t("stat2Num")}</p>
              <p className="mt-2 text-indigo-200">{t("stat2Desc")}</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-white">{t("stat3Num")}</p>
              <p className="mt-2 text-indigo-200">{t("stat3Desc")}</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-white">{t("stat4Num")}</p>
              <p className="mt-2 text-indigo-200">{t("stat4Desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Process Section */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">{t("processTitle")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="relative p-6 bg-white dark:bg-neutral-950 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-800 text-center">
                <div className="w-12 h-12 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center font-bold text-xl mx-auto mb-6">
                  {step}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">{t(`process${step}Title` as any)}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{t(`process${step}Desc` as any)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Testimonials Section */}
      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">{t("testimonialsTitle")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((test) => (
              <div key={test} className="p-8 bg-neutral-50 dark:bg-neutral-900 rounded-3xl border border-neutral-100 dark:border-neutral-800">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-neutral-700 dark:text-neutral-300 mb-6 italic">"{t(`test${test}Text` as any)}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center font-bold text-indigo-600 dark:text-indigo-400">
                    {t(`test${test}Name` as any).charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900 dark:text-white">{t(`test${test}Name` as any)}</p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">{t(`test${test}Role` as any)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Pricing Section */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">{t("pricingTitle")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white dark:bg-neutral-950 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-sm flex flex-col">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">{t("pricingBasic")}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">{t("pricingBasicDesc")}</p>
              <p className="text-4xl font-extrabold text-neutral-900 dark:text-white mb-8">{t("pricingBasicPrice")}</p>
              <button className="mt-auto w-full py-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-semibold hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                {t("pricingBtn")}
              </button>
            </div>
            <div className="p-8 bg-indigo-600 dark:bg-indigo-900 rounded-3xl border border-indigo-700 dark:border-indigo-800 shadow-lg flex flex-col relative text-white">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Popular</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{t("pricingPro")}</h3>
              <p className="text-indigo-200 dark:text-indigo-400 mb-6">{t("pricingProDesc")}</p>
              <p className="text-4xl font-extrabold mb-8">{t("pricingProPrice")}</p>
              <button className="mt-auto w-full py-3 rounded-full bg-white text-indigo-600 font-semibold hover:bg-neutral-100 transition-colors">
                {t("pricingBtn")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-900 dark:to-purple-900 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">{t("ctaTitle")}</h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">{t("ctaDesc")}</p>
          <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-3">
            <input 
              type="email" 
              placeholder={t("ctaInputPlaceholder")}
              className="flex-grow px-5 py-3 rounded-full text-neutral-900 dark:text-white bg-white dark:bg-neutral-950 border-2 border-transparent focus:border-indigo-300 dark:focus:border-indigo-500 focus:outline-none"
              required
            />
            <button 
              type="submit"
              className="px-8 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors shadow-xl border border-transparent"
            >
              {t("ctaSubmitBtn")}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}