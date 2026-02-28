// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { createHighlighter } from 'shiki';
import PowerPC from "./src/assets/ppc.tmLanguage.json"

// https://astro.build/config
export default defineConfig({
	site: 'https://hibyehello.dev',
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: {
			theme: 'tokyo-night',

			// @ts-ignore
			langs: [PowerPC],

			langAlias: {
				ppc: "PowerPC",
			},
		}
	}
});

