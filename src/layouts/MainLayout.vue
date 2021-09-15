<template>
  <div id="layout" class="fixed-full fullscreen" style="position: relative">
    <div class="top">
    <div class="text-center header">農村地方美食小吃特色料理</div>
    <div class="container row">
      <div class="float-left">
        <router-view />
      </div>
      <div class="column advs small-display-none">
        <img
          v-for="(img, index) in images"
          class="imgs"
          :class="{ 'imgs-end': index == images.length - 1 }"
          :key="index"
          :src="imgRequire(`${img.name}.${img.extension}`)"
        />
      </div>
    </div>
    </div>
    <div class="footer">
      <h4>CMoney 全曜財經資訊</h4>
      <h6>資料來源：<span style="color: white">政府資源開放平台</span></h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainLayout",
  mounted() {
    document.title = "農村地方美食小吃特色料理";
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      images: [
        { name: "adv1", extension: "png" },
        { name: "adv2", extension: "png" },
        { name: "adv3", extension: "png" },
      ],
    };
  },
  methods: {
    imgRequire(filename) {
      return require(`@/assets/${filename}`);
    },
  },
};
</script>