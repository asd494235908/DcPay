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
      <div class="pay_top">
        <h3 class="pay_top_text">支付流程</h3>
        <p class="pay_top_desc">DcPay Payment process</p>
      </div>

      <div class="pay_content">
        <a-row type="flex" align="middle" justify="center" class="pay_item">
          <a-col
            :xs="{ span: 24 }"
            :sm="{ span: 24 }"
            :lg="{ span: 12 }"
            :md="{ span: 12 }"
            :xl="{ span: 12 }"
            :xxl="{ span: 12 }"
            class="item_left"
            ><img src="../../../public/imgs/pay_home_1.png" alt="" />
            <p class="item_desc">Order</p></a-col
          >
          <a-col
            :xs="{ span: 24 }"
            :sm="{ span: 24 }"
            :lg="{ span: 12 }"
            :md="{ span: 12 }"
            :xl="{ span: 12 }"
            :xxl="{ span: 12 }"
            class="item_right"
          >
            <div class="item_text">
              <i class="iconfont">&#xe64a;</i>
              <h3>填写确认订单</h3>
            </div>
            <p class="item_p">
              用户确认购买订单后，需填写邮箱或手机号，发送邮件或短信支付结果通知，
              以便及时告知用户支付结果
            </p>
          </a-col>
        </a-row>
        <a-row type="flex" align="middle" justify="center" class="pay_item">
          <a-col
            :xs="{ span: 24, order: 2 }"
            :sm="{ span: 24, order: 1 }"
            :lg="{ span: 12 }"
            :md="{ span: 12 }"
            :xl="{ span: 12 }"
            :xxl="{ span: 12, order: 1 }"
            class="item_right"
          >
            <div class="item_text">
              <i class="iconfont">&#xe624;</i>
              <h3>扫码支付</h3>
            </div>
            <p class="item_p">配置个人的各渠道收款二维码， 支付即时到账</p>
          </a-col>
          <a-col
            :xs="{ span: 24, order: 1 }"
            :sm="{ span: 24, order: 2 }"
            :lg="{ span: 12 }"
            :md="{ span: 12 }"
            :xl="{ span: 12 }"
            :xxl="{ span: 12, order: 2 }"
            class="item_left"
            ><img src="../../../public/imgs/pay_home_2.png" alt="" />
            <p class="item_desc_1">Pay</p></a-col
          >
        </a-row>
        <a-row type="flex" align="middle" justify="center" class="pay_item">
          <a-col
            :xs="{ span: 24 }"
            :sm="{ span: 24 }"
            :lg="{ span: 12 }"
            :md="{ span: 12 }"
            :xl="{ span: 12 }"
            :xxl="{ span: 12 }"
            class="item_left"
            ><img src="../../../public/imgs/pay_home_3.png" alt="" />
            <p class="item_desc">Check</p></a-col
          >
          <a-col
            :xs="{ span: 24 }"
            :sm="{ span: 24 }"
            :lg="{ span: 12 }"
            :md="{ span: 12 }"
            :xl="{ span: 12 }"
            :xxl="{ span: 12 }"
            class="item_right"
          >
            <div class="item_text">
              <i class="iconfont">&#xe64a;</i>
              <h3>审核确认</h3>
            </div>
            <p class="item_p">
              个人管理员收到支付审核通知邮件，确认收款到账， 邮件中进行支付结果审核操作
            </p>
          </a-col>
        </a-row>
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
.pay_content {
  width: 100%;
  .pay_item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 40px;
    .item_left {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      box-sizing: border-box;
      position: relative;
      img {
        width: 330px;
        height: auto;
        z-index: 9;
      }
      .item_desc {
        right: -40px;
      }
      .item_desc,
      .item_desc_1 {
        font-size: 100px;
        font-weight: bold;
        position: absolute;
        top: 120px;
        user-select: none;
        writing-mode: tb-rl;
        letter-spacing: 40px;
        // z-index: -1;
        color: rgb(245, 245, 245);
        text-shadow: 4px 3px 4px rgba($color: #000000, $alpha: 0.2);
      }
      .item_desc_1 {
        top: 200px;
        left: -16px;
      }
    }
    .item_right {
      // width: 800px;
      padding: 60px;
      flex: 1;
      .item_text {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .iconfont {
          font-size: 60px;
        }
        h3 {
          font-size: 28px;
          margin-left: 10px;
          margin-bottom: 0 !important;
          color: $c6;
        }
      }
      .item_p {
        font-size: 22px;
        line-height: 32px;
        margin-top: 30px !important;
        color: $c9;
      }
    }
  }
}

.pay_top {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 120px;
  .pay_top_text {
    font-size: 38px;
    color: $main-col;
    font-weight: bold;
  }
  .pay_top_desc {
    font-size: 18px;
    font-weight: bold;
    color: $c9;
  }
}
</style>
