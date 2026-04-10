import Crud from '@/src/components/crud';
import {useTranslations} from 'next-intl';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return <div>
    <h1>{t('title')} ABOYT</h1>;
    <Crud/>
    </div>
}