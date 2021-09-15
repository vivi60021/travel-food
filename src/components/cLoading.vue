<template>
  <div v-if="show" class="fixed-full fullscreen loading">
    <div class="fullscreen fixed-full full"></div>
    <div class="fixed-full content text-center">
      <div class="icon">
        <span class="material-icons" style="font-size: 100px"> stop </span>
      </div>
      <span class="text">資料下載中...請稍候！</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "c-loading",
  props: {
    show: Boolean,
  },
};
</script>

<style lang="sass" scoped>
@import '../styles/loading'
</style>