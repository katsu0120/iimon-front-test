<template>
  <div class="parent">
    <div class="parentchild">
      <div>
        <nuxt-link to="/">
          Topに戻る
        </nuxt-link>
        <h2>フロントエンドCのテスト</h2>
      </div>
      <div class="boxContainer">
        <FrontTestC />
        <FrontTestC2 />
      </div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>

<style scoped>
  .container {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
}
.box {
  width: 300px;
  height: 200px;
}
.boxContainer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 700px;
}
.parent {
  margin-top: 250px;
  position: relative;
  height: 200px;
}

.parentchild {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform : translate(-50%,-50%);
  transform : translate(-50%,-50%);
  width: 700px;
  text-align: center;
}
</style>
