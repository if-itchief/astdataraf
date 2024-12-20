import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
    integrations: [
        react(),
        tailwind({
            applyBaseStyles: false
        })
    ],
    output: 'hybrid',
    adapter: netlify()
});

// @ts-check
// import { defineConfig } from 'astro/config';

// https://astro.build/config
// export default defineConfig({});