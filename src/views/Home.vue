<template>
  <div id="home">
    <div class="row">
      <c-select
        v-model:value="city_option.city"
        title="請選擇行政區域..."
        @update:value="city_option.city = $event"
        @getValue="selectCity"
        :list="city_option.option"
        @mouseup="hidden = true"
        @mouseleave="hidden = false"
      />
      <c-select
        :style="{ 'z-index': hidden ? -1 : 5 }"
        v-model:value="town_option.town"
        title="請選擇鄉鎮區域..."
        @update:value="town_option.town = $event"
        @getValue="selectTown"
        :list="town_option.option"
      />
      <div class="space small-display-none"></div>
      <div class="small-center">
        <div class="row view-list">
          檢視模式：
          <span
            class="material-icons"
            :class="{ selected: table.view == 'list' }"
            @click="listView('list')"
          >
            view_list
          </span>
          <span
            class="material-icons"
            :class="{ selected: table.view == 'reorder' }"
            @click="listView('reorder')"
          >
            reorder
          </span>
          <span
            class="material-icons"
            :class="{ selected: table.view == 'grid_view' }"
            @click="listView('grid_view')"
          >
            grid_view
          </span>
        </div>
      </div>
    </div>
    <div class="row">
      <c-list
        v-if="table.view == 'list'"
        :data="
          table.show.slice(
            (page.current - 1) * 10,
            (page.current - 1) * 10 + 10
          )
        "
      />
      <c-reorder
        v-else-if="table.view == 'reorder'"
        :data="
          table.show.slice(
            (page.current - 1) * 10,
            (page.current - 1) * 10 + 10
          )
        "
      />
      <c-grid
        v-else
        :data="
          table.show.slice(
            (page.current - 1) * 10,
            (page.current - 1) * 10 + 10
          )
        "
      />
    </div>
    <div class="row home-page" v-if="page.total > 1">
      <div class="small-display-none">
        美食頁次：{{ page.current }}/{{ page.total }}
      </div>
      <div class="space small-display-none"></div>
      <ul class="pagination">
        <li v-for="index in page.total" :key="index">
          <button
            :class="{ active: page.current == index }"
            @click="getPage(index)"
          >
            {{ index }}
          </button>
        </li>
      </ul>
    </div>
    <c-loading :show="loading.show" />
  </div>
</template>
<script>
import _ from "lodash";
import cLoading from "../components/cLoading.vue";
import cSelect from "../components/cSelect.vue";
import cList from "../components/cList.vue";
import cReorder from "../components/cReorder.vue";
import cGrid from "../components/cGrid.vue";
export default {
  components: { cLoading, cList, cReorder, cSelect, cGrid },
  name: "Home",
  mounted() {
    this.loading.show = true;
    this.$api
      .get("OpenData/ODwsv/ODwsvTravelFood.aspx")
      .then((d) => {
        this.table.origin = d.data;
        this.table.data = d.data;
        this.table.show = d.data;
        this.city_option.option = _.uniq(
          _.map(this.table.origin, (v) => v.City)
        );
        this.totalPages();
        this.loading.show = false;
      })
      .catch((e) => {
        this.loading.show = false;
        throw e;
      });
  },
  data() {
    return {
      hidden: false,
      imgHover: "",
      loading: {
        show: false,
      },
      city_option: {
        option: [],
        city: "",
      },
      town_option: {
        option: [],
        town: "",
      },
      table: {
        origin: [],
        data: [],
        show: [],
        view: "list",
      },
      page: {
        total: 0,
        current: 1,
      },
    };
  },
  methods: {
    totalPages() {
      this.page.current = 1;
      this.page.total = _.round(this.table.show.length / 10, 0);
    },
    selectCity() {
      this.table.data = _.filter(
        this.table.origin,
        (v) => v.City == this.city_option.city
      );
      this.table.show = this.table.data;
      this.town_option.option = _.uniq(_.map(this.table.data, (v) => v.Town));
      this.town_option.town = "";
      this.totalPages();
    },
    selectTown() {
      this.table.show = _.filter(
        this.table.data,
        (v) => v.Town == this.town_option.town
      );
      this.totalPages();
    },
    listView(v) {
      if (this.table.view != v) {
        this.table.view = v;
      }
    },
    getPage(index) {
      if (this.page.current != index) {
        this.page.current = index;
      }
    },
  },
};
</script>
