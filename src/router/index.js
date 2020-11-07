import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "Home | Vuetify Blog Template",
      metaTags: [
        {
          name: 'title',
          content: 'Home | Vuetify Blog Template'
        },
        {
          property: 'description',
          content: 'A blog template made using Veutify and VueJS. THis template is totally Open-Source, so feel free to add issues, star or fork the repo'
        },
        {
          name: "og:type",
          content: "website"
        },
        {
          name: "og:url",
          content: "https://nemesis-as.github.io/vuetify-blog/#/"
        },
        {
          name: 'og:title',
          content: 'Home | Vuetify Blog Template'
        },
        {
          property: 'og:description',
          content: 'A blog template made using Veutify and VueJS. THis template is totally Open-Source, so feel free to add issues, star or fork the repo'
        },
        {
          name: "twitter:card",
          content: "summary"
        },
        {
          name: "twitter:url",
          content: "https://nemesis-as.github.io/vuetify-blog/#/"
        },
        {
          name: 'twitter:title',
          content: 'Home | Vuetify Blog Template'
        },
        {
          property: 'twitter:description',
          content: 'A blog template made using Veutify and VueJS. THis template is totally Open-Source, so feel free to add issues, star or fork the repo'
        }
      ]
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: "About | Vuetify Blog Template",
      metaTags: [
        {
          name: 'title',
          content: 'About | Vuetify Blog Template'
        },
        {
          property: 'description',
          content: 'A blog template made using Veutify and VueJS. THis template is totally Open-Source, so feel free to add issues, star or fork the repo'
        },
        {
          name: "og:type",
          content: "website"
        },
        {
          name: "og:url",
          content: "https://nemesis-as.github.io/vuetify-blog/#/about"
        },
        {
          name: 'og:title',
          content: 'About | Vuetify Blog Template'
        },
        {
          property: 'og:description',
          content: 'A blog template made using Veutify and VueJS. THis template is totally Open-Source, so feel free to add issues, star or fork the repo'
        },
        {
          name: "twitter:card",
          content: "summary"
        },
        {
          name: "twitter:url",
          content: "https://nemesis-as.github.io/vuetify-blog/#/about"
        },
        {
          name: 'twitter:title',
          content: 'About | Vuetify Blog Template'
        },
        {
          property: 'twitter:description',
          content: 'A blog template made using Veutify and VueJS. THis template is totally Open-Source, so feel free to add issues, star or fork the repo'
        }
      ]
    }
  },
  {
    path: "/archive",
    name: "Archive",
    component: () => import("../views/Archive.vue"),
    meta: {
      title: "Archive | Vuetify Blog Template",
      metaTags: [
        {
          name: 'title',
          content: 'Archive | Vuetify Blog Template'
        },
        {
          property: 'description',
          content: 'A blog template made using Veutify and VueJS. THis template is totally Open-Source, so feel free to add issues, star or fork the repo'
        },
        {
          name: "og:type",
          content: "website"
        },
        {
          name: "og:url",
          content: "https://nemesis-as.github.io/vuetify-blog/#/archive"
        },
        {
          name: 'og:title',
          content: 'Archive | Vuetify Blog Template'
        },
        {
          property: 'og:description',
          content: 'A blog template made using Veutify and VueJS. THis template is totally Open-Source, so feel free to add issues, star or fork the repo'
        },
        {
          name: "twitter:card",
          content: "summary"
        },
        {
          name: "twitter:url",
          content: "https://nemesis-as.github.io/vuetify-blog/#/archive"
        },
        {
          name: 'twitter:title',
          content: 'Archive | Vuetify Blog Template'
        },
        {
          property: 'twitter:description',
          content: 'A blog template made using Veutify and VueJS. THis template is totally Open-Source, so feel free to add issues, star or fork the repo'
        }
      ]
    }
  },
  {
    path: "/post/:id",
    name: "Post",
    component: () => import("../views/Post.vue"),
    meta: {
      title: "Post | Vuetify Blog Template",
      metaTags: [
        {
          name: 'title',
          content: 'Post | Vuetify Blog Template'
        },
        {
          property: 'description',
          content: 'A blog template made using Veutify and VueJS. THis template is totally Open-Source, so feel free to add issues, star or fork the repo'
        },
        {
          name: "og:type",
          content: "website"
        },
        {
          name: "og:url",
          content: "https://nemesis-as.github.io/vuetify-blog/#/post"
        },
        {
          name: 'og:title',
          content: 'Post | Vuetify Blog Template'
        },
        {
          property: 'og:description',
          content: 'A blog template made using Veutify and VueJS. THis template is totally Open-Source, so feel free to add issues, star or fork the repo'
        },
        {
          name: "twitter:card",
          content: "summary"
        },
        {
          name: "twitter:url",
          content: "https://nemesis-as.github.io/vuetify-blog/#/post"
        },
        {
          name: 'twitter:title',
          content: 'Post | Vuetify Blog Template'
        },
        {
          property: 'twitter:description',
          content: 'A blog template made using Veutify and VueJS. THis template is totally Open-Source, so feel free to add issues, star or fork the repo'
        }
      ]
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
