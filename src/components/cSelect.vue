<template>
  <div
    class="select"
    :class="{ 'hight-light-border': visible }"
    :data-value="value"
    :data-list="list"
  >
    <div class="selector" @click="toggle()">
      <div class="row label">
        <span class="text-ellipsis" style="width: 75%">{{
          value == "" ? title ?? default_vaule ?? "請選擇..." : value
        }}</span>
        <div class="space"></div>
        <span class="material-icons"> arrow_drop_down </span>
      </div>
      <div class="arrow" :class="{ expanded: visible }"></div>
      <div :class="{ hidden: !visible, visible }" @mouseleave="visible = false">
        <ul>
          <div class="title text-ellipsis">{{ title }}</div>
          <li
            class="text-ellipsis"
            :class="{ current: item === value }"
            v-for="(item, index) in list"
            :key="index"
            @click="select(item)"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import _ from "lodash";
export default {
  name: "c-select",
  emits: ["update:value", "getValue"],
  props: {
    value: {
      type: String,
      default: "",
    },
    show_title: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: null,
    },
    default_vaule: {
      type: String,
      default: null,
    },
    list: Array,
  },
  mounted() {
    if (!_.isEmpty(this.default_vaule))
      this.$emit("update:value", this.default_vaule);
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
    select(option) {
      this.$emit("update:value", option);
      this.$emit("getValue");
    },
  },
};
</script>

<style lang="sass" scoped>
@import '../styles/select'
</style>