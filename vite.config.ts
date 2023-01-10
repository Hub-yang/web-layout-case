import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"
import {
  ElementPlusResolver,
  VueUseComponentsResolver,
} from "unplugin-vue-components/resolvers"
import Components from "unplugin-vue-components/vite"
import AutoImport from "unplugin-auto-import/vite"
import ElementPlus from "unplugin-element-plus/vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ElementPlus({
      // useSource: true
    }),
    AutoImport({
      imports: ["vue", "pinia", "vue-router"],
      // 指定配置文件生成的位置与文件名
      dts: "./src/automatic/auto-imports.d.ts",
      // 指定引入utils目录下所有文件
      // dirs: ["./src/utils/**"],
      resolvers: [ElementPlusResolver()],
      // 配置开启eslint
      eslintrc: {
        enabled: true, // Default `false`
        filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
    Components({
      // 指定组件位置，默认为 src/components
      dirs: ["src/components"],
      // 指定配置文件生成的位置与文件名
      dts: "./src/automatic/components.d.ts",
      extensions: ["vue", "md"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [ElementPlusResolver(), VueUseComponentsResolver()],
    }),
  ],
  // alias别名设置
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 把 @ 指向到 src 目录去
    },
  },
  // css配置
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
            @import "@/styles/variables.scss";
          `,
        javascriptEnabled: true,
      },
    },
  },
})
