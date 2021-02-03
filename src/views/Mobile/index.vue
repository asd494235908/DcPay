<template>
  <div class="warp">
    <herder></herder>
    <a-row type="flex" align="middle" justify="center" class="Mobile_warp">
      <a-col
        :xs="{ span: 0 }"
        :sm="{ span: 0 }"
        :lg="{ span: 0 }"
        :md="{ span: 2 }"
        :xl="{ span: 2 }"
        :xxl="{ span: 4 }"
      ></a-col>
      <a-col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :lg="{ span: 24 }"
        :md="{ span: 20 }"
        :xl="{ span: 20 }"
        :xxl="{ span: 16 }"
        class="Mobile_item_laer"
      >
        <h3 class="text">下载移动商城</h3>
        <div class="Mobile">
          <div class="Mobile_item_warp">
            <div class="Mobile_item">
              <android-filled class="icon icon1" />
            </div>
            <div class="Mobile_item_desc">
              <p>Android端</p>
              <img src="../../../public/imgs/downloadApp.png" alt="" />
            </div>
          </div>
          <div class="Mobile_item_warp">
            <div class="Mobile_item">
              <wechat-filled class="icon icon3" />
            </div>
            <div class="Mobile_item_desc">
              <p>微信小程序</p>
              <img src="../../../public/imgs/logo1.png" alt="" />
            </div>
          </div>
        </div>
      </a-col>

      <a-col
        :xs="{ span: 0 }"
        :sm="{ span: 0 }"
        :lg="{ span: 0 }"
        :md="{ span: 2 }"
        :xl="{ span: 2 }"
        :xxl="{ span: 4 }"
      >
      </a-col>
    </a-row>
  </div>

  <buttom></buttom>
</template>

<script>
import { reactive, toRefs } from "vue";
import Herder from "@/components/home_herder/index.vue";
import Buttom from "@/components/buttom/index.vue";

import { AndroidFilled, AppleFilled, WechatFilled } from "@ant-design/icons-vue";
export default {
  components: { Herder, Buttom, AndroidFilled, AppleFilled, WechatFilled },
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/theme.scss";
.warp {
  background: url("../../../public/imgs/bg.png") no-repeat top center;
  .Mobile_warp {
    min-height: 800px;
    padding-bottom: 90px;
    .Mobile_item_laer {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .text {
        font-size: 38px;
        color: $cf;
        margin-bottom: 60px;
      }
    }
    .Mobile {
      width: 100%;
      height: 90px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .Mobile_item:hover {
      width: 70px;
      height: 70px;
      box-shadow: 0px 3px 17px rgba($color: #000000, $alpha: 0.5) inset;
      .icon {
        font-size: 38px;
      }
    }
    .Mobile_item:hover + .Mobile_item_desc {
      display: block;
    }
    .Mobile_item_warp {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      position: relative;
      .Mobile_item_desc {
        display: none;
        position: absolute;
        top: 80px;
        left: 50%;
        background-color: $cf;
        transform: translateX(-50%);
        border-radius: 4px;
        box-shadow: 0px 3px 17px rgba($color: #000000, $alpha: 0.5);
        padding: 5px;
        p {
          text-align: center;
          font-size: 16px;
          line-height: 40px;
          height: 40px;
          border-bottom: 1px solid $xt;
        }
        img {
          width: 120px;
          height: 120px;
        }
      }
      .Mobile_item_desc::after {
        content: "";
        position: absolute;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-width: 0 10px 10px;
        border-style: solid;
        border-color: transparent transparent $bgfff;
      }
    }
    .Mobile_item {
      width: 60px;
      height: 60px;
      background-color: $cf;
      border-radius: 4px;
      cursor: pointer;

      transition: all 0.1s ease-in-out;
      backface-visibility: hidden;

      .icon {
        width: 100%;
        height: 100%;
        font-size: 36px;
        transform: translateY(20%);
      }
      .icon1 {
        // color: rgb(151, 192, 36);
      }
      .icon2 {
      }
      .icon3 {
      }
    }
  }
}
</style>
