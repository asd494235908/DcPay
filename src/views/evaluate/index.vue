<template>
  <a-row type="flex" align="middle" justify="center" class="evaluate_top">
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
      class="evaluate_top_text"
      >用户评价
      <p class="evaluate_top_text_desc">User evaluation</p>
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
  <a-row type="flex" align="middle" justify="center" class="evaluate_warp">
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
      class="evaluate"
    >
      <div class="evaluate_item">
        <p class="text">
          正愁个人某宝上都买不到营业执照，找不到靠谱的第三方聚合支付，这确实是一个不错的方案.
        </p>
        <p class="name">Mike</p>
        <div class="laer top">
          <i class="laer_desc"></i>
          <i class="laer_desc"></i>
        </div>
        <div class="laer touttom">
          <i class="laer_desc"></i>
          <i class="laer_desc"></i>
        </div>
      </div>
      <div class="evaluate_item">
        <p class="text">虽然不能商用，但想法很好，适合个人收款不多的使用.</p>
        <p class="name">Mike</p>
        <div class="laer top">
          <i class="laer_desc"></i>
          <i class="laer_desc"></i>
        </div>
        <div class="laer touttom">
          <i class="laer_desc"></i>
          <i class="laer_desc"></i>
        </div>
      </div>
      <div class="evaluate_item">
        <p class="text">以后我的收到捐赠的不用手动去维护捐赠表啦，哈哈，感谢</p>
        <p class="name">Mike</p>
        <div class="laer top">
          <i class="laer_desc"></i>
          <i class="laer_desc"></i>
        </div>
        <div class="laer touttom">
          <i class="laer_desc"></i>
          <i class="laer_desc"></i>
        </div>
      </div>
      <div class="evaluate_item">
        <p class="text">正好我做的是灰色产业，申请不到支付接口，感谢作者的DcPay.</p>
        <p class="name">Mike</p>
        <div class="laer top">
          <i class="laer_desc"></i>
          <i class="laer_desc"></i>
        </div>
        <div class="laer touttom">
          <i class="laer_desc"></i>
          <i class="laer_desc"></i>
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
  <a-row type="flex" align="middle" justify="center" class="evaluate_buttom">
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
      class="evaluate_buttom_warp"
    >
      <div class="evaluate_buttom_left">
        <h3 class="evaluate_buttom_h3">如何开发使用DcPay?</h3>
        <p class="evaluate_buttom_text">
          DcPay是完全开源免费的个人收款支付系统， 为个人提供了完美的支付解决方案.
          系统方案及本网站源码v1.0版本已公开至Github和码云，有详细的教程和源码参考，
          详情点击下方链接查看.
        </p>
        <div class="evaluate_buttom_links">
          <div class="github"><i class="iconfont">&#xe628;</i>Github</div>
          <div class="Gitee"><i class="iconfont">&#xe686;</i>Gitee</div>
        </div>
      </div>
      <div class="evaluate_buttom_right"></div>
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
.evaluate_buttom {
  width: 100%;
  height: 100%;
  margin-top: 60px;
  padding-bottom: 60px;
  background: $main-col;
  .evaluate_buttom_warp {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .evaluate_buttom_left {
    flex: 1;
    height: 100%;
    .evaluate_buttom_h3 {
      margin-top: 30px;
      font-size: 32px;
      font-weight: bold;
      color: $cf;
      margin-left: 10px;
      cursor: pointer;
    }
    .evaluate_buttom_text {
      font-size: 18px;
      line-height: 32px;
      color: $cf;
      padding: 0 10px;
    }
    .evaluate_buttom_links {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 30px;
      .github,
      .Gitee {
        background: $c3;
        margin: 0 20px;
        width: 140px;
        // padding: 0 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
        color: $cf;
        font-weight: bold;
        border-radius: 2px;
        cursor: pointer;
        user-select: none;
        .iconfont {
          font-size: 32px;
          margin: 0 10px;
          color: $cf;
          
        }
      }
      .github {
      }
      .Gitee {
      }
    }
  }
  .evaluate_buttom_right {
    position: relative;
    bottom: -80px;
    width: 600px;
    height: 400px;
    background: url('../../../public/imgs/pay_home_4.png') no-repeat top center;
    background-size: cover;
  }
}

.evaluate {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.evaluate_item {
  width: 400px;
  position: relative;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 36px 30px;
  .text {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
  }
  .name {
    width: 100%;
    font-size: 18px;
    color: $c6;
    margin-top: 20px !important;
    text-align: start;
  }
}

.laer {
  position: absolute;
}
.top {
  top: 0;
  left: 40px;
}
.touttom {
  bottom: 0;
  right: 40px;
}
.laer_desc {
  display: inline-block;
  width: 8px;
  height: 30px;
  background-color: $main-col;
  margin: 0 10px;
  border-radius: 10px;
  transform: rotate(25deg);
}
.evaluate_top {
  margin-top: 120px;
  .evaluate_top_text_desc {
    font-size: 18px;
    font-weight: bold;
    color: $c9;
  }
}
.evaluate_top_text {
  text-align: center;
  font-weight: bold;
  font-size: 38px;
  color: $main-col;
}
</style>
