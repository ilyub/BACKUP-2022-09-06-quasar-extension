const { configure } = require("quasar/wrappers");

module.exports = configure(ctx => {
  return {
    animations: [],
    boot: ["main"],
    build: {
      analyze: true,
      extendWebpack(config) {
        config.optimization = {
          ...config.optimization,
          minimize: ctx.prod,
          removeAvailableModules: true,
          removeEmptyChunks: true,
          splitChunks: {
            maxSize: 200_000,
            minSize: 50_000
          }
        };
      },
      gzip: false,
      preloadChunks: true,
      productDescription: "Quasar extension",
      productName: "Quasar extension",
      publicPath: "/",
      rtl: true,
      showProgress: true,
      sourceMap: true,
      transpile: true,
      transpileDependencies: [],
      vueRouterMode: "history"
    },
    capacitor: {
      hideSplashscreen: true
    },
    cordova: {},
    css: ["app.scss"],
    devServer: {
      host: "quasar-extension.local.host",
      https: true,
      open: true,
      port: 9300
    },
    electron: {
      builder: {
        appId: "quasar-extension"
      },
      bundler: "packager",
      chainWebpack() {
        //
      },
      chainWebpackPreload() {
        //
      },
      packager: {}
    },
    extras: [],
    framework: {
      config: {},
      iconSet: "svg-mdi-v6",
      plugins: ["Notify"]
    },
    pwa: {
      chainWebpackCustomSW() {
        //
      },
      manifest: {
        background_color: "#ffffff",
        description: "Quasar extension",
        display: "standalone",
        icons: [
          {
            sizes: "128x128",
            src: "icon-128x128.png",
            type: "image/png"
          },
          {
            sizes: "192x192",
            src: "icon-192x192.png",
            type: "image/png"
          },
          {
            sizes: "256x256",
            src: "icon-256x256.png",
            type: "image/png"
          },
          {
            sizes: "384x384",
            src: "icon-384x384.png",
            type: "image/png"
          },
          {
            sizes: "512x512",
            src: "icon-512x512.png",
            type: "image/png"
          }
        ],
        name: "Quasar extension",
        orientation: "portrait",
        short_name: "Quasar extension",
        theme_color: "#027be3"
      },
      workboxOptions: {},
      workboxPluginMode: "GenerateSW"
    },
    ssr: {
      chainWebpackWebserver() {
        //
      },
      maxAge: 30 * 24 * 3600 * 1000,
      middlewares: [ctx.prod ? "compression" : "", "render"],
      prodPort: 3000,
      pwa: false
    },
    supportTS: {
      tsCheckerConfig: {
        eslint: {
          enabled: true,
          files: "./src/**/*.{js,jsx,ts,tsx,vue}"
        }
      }
    }
  };
});
