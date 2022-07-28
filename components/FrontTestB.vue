<template>
  <div class="container">
    <div class="box">
      <nuxt-link to="/">
        Topに戻る
      </nuxt-link>
      <h2>フロントエンドBのテスト</h2>
      <div class="form">
        <input
          v-model="text"
          class="input"
          type="text"
        >
        <button
          class="button"
          @click="addList"
        >
          追加
        </button>
      </div>
      <div
        v-for="(list, i) in lists"
        :key="i"
      >
        <div class="lists">
          <button
            class="button2"
            @click="listDelete(i)"
          >
            x
          </button>
          {{ list }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      text: '',
      lists: []
    }
  },
  methods: {
    addList () {
      if (this.text === '') {
        alert('テキストを入力して下さい')
        return
      }
      this.lists.push(this.text)
      this.text = ''
    },
    listDelete (index) {
      this.lists.splice(index, 1)
    }
  }
}
</script>

<style>
.container {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  width: 300px;
  height: 200px;
}
 .button {
  color: white;
  background: navy;
  height: 30px;
 }
 .input{
  width: 80%;
  height: 30px;
  font-size: 16px;
 }
 .button2 {
  color: white;
  background: navy;
  height: 50px;
  width: 50px;
  margin-right: 20px;
 }
 .form {
    margin-bottom: 50px;
 }
 .lists {
    border: solid 1px navy;
    margin-bottom: 5px;
}
.list {
  padding-left: 20px;
}
</style>
