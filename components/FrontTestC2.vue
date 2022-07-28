<template>
  <div>
    <div class="body">
      <div
        v-for="(list, i) in lists"
        :key="i"
        class="list"
      >
        {{ list }}
      </div>
    </div>
    <button
      class="botton"
      @click="rightMove"
    >
      左へ移動
    </button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: []
    }
  },
  computed: {
    lists () {
      const lists = Array.from(this.$store.state.lists.list2)
      return lists
    }
  },
  methods: {
    rightMove () {
      if (this.lists.length <= 0) {
        alert('配列は空です')
        return
      }
      const listItem = this.lists.pop()
      this.$store.dispatch('leftMove', listItem)
      this.$store.dispatch('rightDelete', this.lists)
    }
  }
}
</script>
<style scoped>
.body {
  border: solid 1px navy;
  width: 300px;
  height: 500px;
}
.list {
  text-align: center;
  font-size: 16px;
  border-bottom: solid 1px navy;
  margin: 20px;
  padding-bottom: 10px;
}
.botton {
  margin-top: 30px;
  color: white;
  background: navy;
  height: 40px;
  font-size: 16px;
}
</style>
