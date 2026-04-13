import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            {t("title")}
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            {t("subtitle")}
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid gap-12 mt-12 md:grid-cols-2">
          {/* Mission Card */}
          <div className="relative p-10 bg-white dark:bg-neutral-900 rounded-3xl shadow-xl shadow-neutral-200/50 dark:shadow-none border border-neutral-100 dark:border-neutral-800 overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 bg-gradient-to-b from-indigo-500 to-purple-500 h-full"></div>
            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              {t("missionTitle")}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-lg">
              {t("missionDesc")}
            </p>
          </div>

          {/* Vision Card */}
          <div className="relative p-10 bg-white dark:bg-neutral-900 rounded-3xl shadow-xl shadow-neutral-200/50 dark:shadow-none border border-neutral-100 dark:border-neutral-800 overflow-hidden group">
             <div className="absolute top-0 right-0 w-2 bg-gradient-to-b from-pink-500 to-rose-500 h-full"></div>
            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              {t("visionTitle")}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-lg">
              {t("visionDesc")}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}