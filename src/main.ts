import { createHead } from '@unhead/vue'
import NProgress from 'nprogress'
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'

import routes from '~pages'

import './style.css'

const head = createHead()

export const createApp = ViteSSG(
  App,
  {
    routes
  },
  ({ app, router, isClient }) => {
    app.use(head)

    if (isClient) {
      router.beforeEach(() => {
        NProgress.start()
      })
      router.afterEach(() => {
        NProgress.done()
      })
    }
  }
)
