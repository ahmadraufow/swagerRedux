"use client"
import { usePathname, useRouter } from "../i18n/navigation"
import { useParams } from "next/navigation"

const LangSwitch = () => {
    const router = useRouter()
    const pathname = usePathname()
    const {locale} = useParams()
    const handelLangChange = (event: any) => {
        router.push(
            pathname,
            { locale: event.target.value }
        )
    }
  return (
    <select value={locale} onChange={handelLangChange}  >
      <option value="ru">ru</option>
      <option value="en">en</option>
    </select>
  )
}

export default LangSwitch
