<template>
  <v-container>
    <template v-if="error.statusCode === 404">
      <text-page-title>
        {{ error.statusCode }}
        {{ pageNotFound }}
      </text-page-title>
      <p>
        ページが見つかりませんでした。移動または削除された可能性があります。
      </p>
      <p>The page was not found. It may have been moved or deleted.</p>
    </template>
    <template v-else>
      <text-page-title>
        {{ error.statusCode }}
        {{ otherError }}
      </text-page-title>
    </template>
    <btn-inside link="ホームへもどる" to="/" class="mb-2"></btn-inside>
    <btn-inside
      link="Return to home page"
      to="/english"
      class="mb-2"
    ></btn-inside>
  </v-container>
</template>

<script>
export default {
  name: 'LayoutError',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: 'Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>
