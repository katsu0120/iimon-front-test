<template>
  <div>
    <br>
    <nuxt-link to="/frontendA">
      frontendA
    </nuxt-link>
    <br>
    <nuxt-link to="/frontendB">
      frontendB
    </nuxt-link>
    <br>
    <nuxt-link to="/frontendC">
      frontendC
    </nuxt-link>
    <div
      v-for="(msg, i) in msgs"
      :key="i"
    >
      {{ msg }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      msgs: []
    }
  },
  methods: {
    addCount () {
      this.$store.dispatch('addCount', 1)
    }
  }
}
</script>
