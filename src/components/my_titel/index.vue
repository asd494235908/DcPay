<template>
  <div>
    <a-row type="flex" align="middle" justify="center">
      <a-col
        :xs="{ span: 0, offset: 0 }"
        :sm="{ span: 0, offset: 0 }"
        :lg="{ span: 0, offset: 0 }"
        :md="{ span: 0, offset: 0 }"
        :xl="{ span: 2, offset: 0 }"
        :xxl="{ span: 4, offset: 0 }"
        ></a-col
      >
      <a-col
        :xs="{ span: 22, offset: 2, pull: 1 }"
        :sm="{ span: 22, offset: 2, pull: 1 }"
        :lg="{ span: 22, offset: 2, pull: 1 }"
        :md="{ span: 22, offset: 2, pull: 1 }"
        :xl="{ span: 20, offset: 0, pull: 0 }"
        :xxl="{ span: 16, offset: 0, pull: 0 }"
      >
        <div class="content-warp">
          <div class="content-titel">
            <h2>{{ titel }}</h2>
          </div>
          <div class="content-box">
            <slot name="content"></slot>
          </div>
        </div>
      </a-col>
      <a-col
        :xs="{ span: 0, offset: 0 }"
        :sm="{ span: 0, offset: 0 }"
        :lg="{ span: 0, offset: 0 }"
        :md="{ span: 0, offset: 0 }"
        :xl="{ span: 2, offset: 0 }"
        :xxl="{ span: 4, offset: 0 }"
        >
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "vue";

export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const state = reactive({
      count: 0,
    });
    const titel = computed(() => {
      return props.title;
    });
    return {
      ...toRefs(state),
      titel,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/theme.scss";
.content-warp {
  width: 100%;
  margin-top: 70px;
  margin-bottom: 70px;
  border-radius: 4px;
  box-shadow: 0 0px 4px rgba($color: #000000, $alpha: 0.1);
  .content-titel {
    width: 100%;
    height: 60px;
    cursor: pointer;
    // background: linear-gradient(#fbfbfb,#ececec);
    // border-radius: 8px 8px 0 0;
    // box-shadow: 0 1px 7px rgba(0,0,0,.1);
    padding: 0 20px;
    color: $c6;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    line-height: 60px;
    position: relative;
    z-index: 30;
    display: flex;
    justify-content: space-between;
  }
  .content-titel h2 {
    font-size: 18px;
    font-weight: bold;
    color: $main-col;
  }
  .content-box {
    width: 100%;
    //   border-radius: 0 0 4px 4px;
    z-index: 999;
    display: flex;
    min-height: 520px;
    flex-wrap: wrap;
  }
}
</style>
