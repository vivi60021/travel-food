<template>
  <div style="position: relative; display: inline-grid">
    <div class="frame">
      <table cellpadding="10" border="1">
        <thead>
          <tr>
            <th>編號</th>
            <th>行政區域</th>
            <th>鄉鎮區</th>
            <th>商家</th>
            <th>地址</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="index">
            <td style="min-width: 40px; max-width: 40px" class="number">
              {{ index + 1 }}
            </td>
            <td style="min-width: 80px; max-width: 100px">
              <span class="area">{{ item.City }}</span>
            </td>
            <td style="min-width: 80px; max-width: 100px">
              <span class="area">{{ item.Town }}</span>
            </td>
            <td style="min-width: 200px; max-width: 220px">
              <span class="store text-ellipsis">{{ item.Name }}</span>
            </td>
            <td style="min-width: 200px; max-width: 320px">
              <span class="store text-ellipsis">{{ item.Address }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "c-reorder",
  props: {
    data: Array,
  },
};
</script>
<style lang="sass" scoped>
@import "../styles/reorder.sass"
</style>