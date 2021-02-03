<template>
  <a-row type="flex" align="middle" justify="center">
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
    >
      <div class="introduce_top">
        <h3 class="introduce_top_text">全+半自动化解决方案</h3>
        <p class="introduce_top_desc">完美解决个人在线收款支付接口难题</p>
      </div>
      <div class="introduce">
        <div class="introduce_item">
          <i class="iconfont">&#xe60c;</i>
          <div class="introduce_text">
            <h3>完全免费、稳定安全</h3>
            <p class="item_text">
              没有中间商赚差价！每笔交易金额实时直达您个人账户，
              不再忍受第三方抽取手续费。市面上最稳定安全方案，不干涉监听任何支付数据，无视各种风控
            </p>
          </div>
        </div>
        <div class="introduce_item">
          <i class="iconfont font_1">&#xe65e;</i>
          <div class="introduce_text">
            <h3>无需签约</h3>
            <p class="item_text">
              营业执照？个体工商户？身份证？统统见鬼去吧！
              一张二维收款码搞定收款。支付宝、微信、各种付任你选
            </p>
          </div>
        </div>
        <div class="introduce_item">
          <i class="iconfont font_2">&#xe64a;</i>
          <div class="introduce_text">
            <h3>无需任何第三方SDK、无需挂机监控APP</h3>
            <p class="item_text">
              无需集成任何支付SDK代码，无需监听外挂，极简自定义开发。
              支持任何业务逻辑回调，支持移动端支付
            </p>
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
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
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
.introduce_top {
  margin: 80px 0;
  width: 100%;
  .introduce_top_text {
    width: 100%;
    text-align: center;
    font-size: 38px;
    font-weight: bold;
    color: $main-col;
  }
  .introduce_top_desc {
    width: 100%;
    text-align: center;
    font-size: 18px;
    color: $c9;
  }
}

.introduce {
  width: 100%;
  //   height: 500px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  .iconfont {
    font-size: 50px;
    margin: 0 10px;
  }
  .font_1 {
    font-size: 60px;
    position: relative;
    top: -10px;
  }
  .font_2 {
    font-size: 45px;
  }
  .introduce_item {
    width: 500px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin: 20px 10px;
    box-sizing: border-box !important;
    .introduce_text {
      h3 {
        font-size: 26px;
        color: $c6;
        margin-top: 10px;
      }
      .item_text {
        font-size: 16px;
      }
    }
  }
}
</style>
