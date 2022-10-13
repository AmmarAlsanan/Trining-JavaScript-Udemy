import typescript from "rollup-plugin-typescript2"

export default {
    input: [
        'src/index.ts'
    ],
    output: {
        dir: 'lib',
        format: 'esm',
        sourcemap: true
    },
    plugins: [typescript()],
    preserveModules: true,
}