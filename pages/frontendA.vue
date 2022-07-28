<template>
  <div>
    <nuxt-link to="/">
      Topに戻る
    </nuxt-link>
    <h2>フロントエンドAのテスト</h2>
    <button
      type="button"
      name="button"
      @click="getMsg"
    >
      更新
    </button>
    <div
      v-for="(msg, i) in msgs"
      :key="i"
    >
      {{ msg.fact }}
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msgs: []
    }
  },
  methods: {
    getMsg () {
      this.$axios.$get('https://catfact.ninja/fact')
        .then(res => this.msgs.push(res))
    }
  }
}
</script>
