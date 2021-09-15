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
      <div class="column detail">
        <h1 class="title">
          <a v-if="item.Url != ''" target="_blank" :href="item.Url">{{
            item.Name
          }}</a>
          <span v-else>{{ item.Name }}</span>
        </h1>
        <div class="column small-row">
          <div class="city">{{ item.City }}</div>
          <div class="town">
            <span class="town-text">{{ item.Town }}</span>
          </div>
        </div>
        <div class="feature">
          {{
            item.FoodFeature.length > 100
              ? `${item.FoodFeature.substring(0, 100)}...`
              : item.FoodFeature
          }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "c-list",
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
@import "../styles/list.sass"
</style>