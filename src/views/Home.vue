<template>
  <v-container fluid class="pa-0">
    <newsletter-block></newsletter-block>
    <featured-posts></featured-posts>
  </v-container>
</template>

<script>
// @ is an alias to /src
import NewsletterBlock from '@/components/NewsletterBlock.vue';
import FeaturedPosts from '@/components/FeaturedPosts.vue';

export default {
  name: 'Home',
  components: {
    NewsletterBlock,
    FeaturedPosts
  }
}
</script>
