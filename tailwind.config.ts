import type { Config } from 'tailwindcss';
import { doobTailwindPreset }  from './packages/ui/src/tailwind';

const doobPreset = doobTailwindPreset({});

const config: Config = {
  darkMode: 'class',
  presets: [
    doobPreset,
  ],
  content: [
    ...doobPreset.content,
    './packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
};
export default config;
