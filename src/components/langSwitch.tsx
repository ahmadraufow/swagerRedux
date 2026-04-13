"use client";

import { usePathname, useRouter } from "@/src/i18n/navigation";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

export default function LangSwitch() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations("Navigation");

  const handelLangChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    router.replace(pathname, { locale: event.target.value });
  };

  return (
    <div className="relative group flex items-center">
      <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
        <svg className="w-4 h-4 text-neutral-500 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      </div>
      <select
        value={locale}
        onChange={handelLangChange}
        className="appearance-none bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 text-sm font-medium pr-8 pl-8 py-2 rounded-full outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors cursor-pointer border border-transparent shadow-sm"
        aria-label={t("language")}
      >
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </select>
      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
        <svg className="w-3 h-3 text-neutral-500 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}
