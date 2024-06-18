import { Locale, LocaleCode } from '@do-ob/ui/types';

import { enUs } from './locale/en-us';

const library: Record<LocaleCode, Locale> = {
  'en-US': enUs,
  'fr-FR': {},
  'fr-CA': {},
  'de-DE': {},
  'en-GB': {},
  'ja-JP': {},
  'da-DK': {},
  'nl-NL': {},
  'fi-FI': {},
  'it-IT': {},
  'nb-NO': {},
  'es-ES': {},
  'sv-SE': {},
  'pt-BR': {},
  'zh-CN': {},
  'zh-TW': {},
  'ko-KR': {},
  'bg-BG': {},
  'hr-HR': {},
  'cs-CZ': {},
  'et-EE': {},
  'hu-HU': {},
  'lv-LV': {},
  'lt-LT': {},
  'pl-PL': {},
  'ro-RO': {},
  'ru-RU': {},
  'sr-SP': {},
  'sk-SK': {},
  'sl-SI': {},
  'tr-TR': {},
  'uk-UA': {},
  'ar-AE': {},
  'ar-DZ': {},
  'AR-EG': {},
  'ar-SA': {},
  'el-GR': {},
  'he-IL': {},
  'fa-AF': {},
  'am-ET': {},
  'hi-IN': {},
  'th-TH': {}
};

export function localeLibrary(code: LocaleCode) {
  return library[code];
}
