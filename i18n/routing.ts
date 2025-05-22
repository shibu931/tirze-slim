import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  locales: ['it','en'],
 
  defaultLocale: 'it',
  alternateLinks:false,
});