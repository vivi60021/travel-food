<template>
  <div class="row show-data" v-for="(item, index) in data" :key="index">
    <div class="row content">
      <div
        class="img-overlay"
        @mousemove="imgHover = item.ID"
        @mouseleave="imgHover = ''"
      >
        <img
          class="img"
          :class="{ 'img-hover': item.ID == imgHover }"
          :src="item.PicURL"
        />
      </div>
      <div v-if="item.ID != imgHover" class="column detail">
        <div class="row small-row">
          <div class="city">{{ item.City }}</div>
          <div class="town">{{ item.Town }}</div>
        </div>
        <h1 class="title">{{ item.Name }}</h1>
      </div>
      <div v-else class="column detail detail-top">
        <div class="row small-row">
          <div class="city">{{ item.City }}</div>
          <div class="town">{{ item.Town }}</div>
        </div>
        <h1 class="title">{{ item.Name }}</h1>
        <div class="separator"></div>
        <div class="feature">
          {{ item.FoodFeature }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "c-grid",
  props: {
    data: Array,
  },
  data() {
    return {
      imgHover: "",
    };
  },
};
</script>

<style lang="sass" scoped>
@import "../styles/grid.sass"
</style>