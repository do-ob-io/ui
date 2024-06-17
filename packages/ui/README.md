<p align="center">
  <img
    width="256"
    src="https://github.com/do-ob-io/shared/blob/main/do-ob-logo-readme.png?raw=true"
    alt="do-ob logo"
  />
</p>

# User Interface

A TailwindCSS and NextUI-(Open Source) components library for React projects. This library provides a set of pre-built, UI components to accelerate web application development.

Indended for use with modern ESM TypeScript in other do-ob projects. Documentation is limited at this time.

# Libraries Leveraged

* [TailwindCSS Installation Guide](https://tailwindcss.com/docs/installation)
*	[NextUI Installation Guide](https://nextui.org/docs/guide/installation)

## Installation

1.	Install the required dependencies using `npm`, `pnpm`, or `yarn`:

```
'@do-ob/ui' 'react' 'react-dom' '@nextui-org/react' 'framer-motion' 'tailwindcss' 'tailwindcss' '@tailwindcss/typography' '@heroicons/react'
```

2. Add the following to your `tailwind.config.ts` file:

```typescript
import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';
import tailwindTypography from '@tailwindcss/typography';

const config: Config = {
  darkMode: 'class',
  content: [
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/@do-ob/ui/dist/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    nextui(),
    tailwindTypography,
  ],
};
export default config;
```