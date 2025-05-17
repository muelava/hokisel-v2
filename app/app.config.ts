export default defineAppConfig({
  // https://ui.nuxt.com/getting-started/theme#design-system
  ui: {
    colors: {
      // primary: 'emerald',
      neutral: 'white',
    },
    button: {
      defaultVariants: {
        // Set default button color to neutral
        // color: 'neutral'
      }
    },
    card:{
      variants:{
        variant:{
          product:{
            root: 'bg-elevated/50 ring-0 divide-none shadow active:bg-slate-50 hover:scale-[102%] transition-all duration-150 select-none cursor-pointer',
            header: 'bg-slate-100 rounded-t-xl p-0',
            body:'p-1 sm:p-2'
          }
        }
      }
    }
  }
})
