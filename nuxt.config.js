export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  dev: process.env.NODE_ENV !== 'production',
  // Global page headers: https://go.nuxtjs.dev/config-head
  loading: {
    color: '#99FCCE',
    height: '5px'
  },
  head: {
    title: 'landing-page',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'}
    ],
    script: [
      {
                    hid: "background",
                    innerHTML: `
                            const c = document.querySelector('canvas');
            const $ = c.getContext('2d');
            const colors = [
              '247, 99, 63, 1',
              '153, 252, 206, 1',
              '183, 73, 230, 1'
            ]
            
            function timeout(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
            
            function getItemFromColor() {
              return colors[Math.floor(Math.random()*colors.length)]
            }
            
            const col = function(x, y, r, g, b) {
              $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
              $.fillRect(x, y, 1,1);
            }
            const R = function(x, y, t) {
              return( Math.floor(192 + 64*Math.cos( (x*x-y*y)/300 + t )) );
            }
            
            const G = function(x, y, t) {
              return( Math.floor(192 + 64*Math.sin( (x*x*Math.cos(t/4)+y*y*Math.sin(t/3))/300 ) ) );
            }
            
            const B = function(x, y, t) {
              return( Math.floor(192 + 64*Math.sin( 5*Math.sin(t/9) + ((x-100)*(x-100)+(y-100)*(y-100))/1100) ));
            }
            
            let t = 0;
            
            const run = async function() {
             await timeout(100)
              for(x=0;x<=35;x++) {
                for(y=0;y<=35;y++) {
                  col(x, y, R(x,y,t), G(x,y,t), B(x,y,t));
                }
              }
              t = t + 0.120;
              window.requestAnimationFrame(run);
            }
            
            run();

        `,
        type: 'text/javascript',
        charset: 'utf-8',
        body: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    '@/assets/css/text-colorized.css',
    '@/assets/css/text-colorized.scss',
    '@/assets/css/scroll-effect.css',
    '@/assets/css/scroll-effect.scss',
    '@/assets/css/background-effect.css',
    '@/assets/css/background-effect.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
    // { src: './plugins/scroll-out.js', mode: 'client' }
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@neneos/nuxt-animate.css'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
