import { copyFileSync } from 'fs'

await Bun.build({
    entrypoints: ['./src/index.ts'],
    outdir: './dist',
    minify: true,
    target: 'bun',
    sourcemap: 'external'
})

export { }