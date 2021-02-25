<template>
  <div class="home_warp">
    <a-row type="flex" align="middle" justify="center">
      <a-col
        :xs="{ span: 0 }"
        :sm="{ span: 0 }"
        :lg="{ span: 2 }"
        :md="{ span: 2 }"
        :xl="{ span: 4 }"
        :xxl="{ span: 4 }"
      >
      </a-col>
      <a-col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :lg="{ span: 20 }"
        :md="{ span: 20 }"
        :xl="{ span: 16 }"
        :xxl="{ span: 16 }"
        class="cnetent"
      >
        <a-row type="flex" align="middle" justify="center" class="cnetent_text">
          <a-col
            :xs="{ span: 2 }"
            :sm="{ span: 2 }"
            :lg="{ span: 4 }"
            :md="{ span: 4 }"
            :xl="{ span: 4 }"
            :xxl="{ span: 4 }"
          >
          </a-col>
          <a-col
            :xs="{ span: 20 }"
            :sm="{ span: 20 }"
            :lg="{ span: 16 }"
            :md="{ span: 16 }"
            :xl="{ span: 16 }"
            :xxl="{ span: 16 }"
            class="text"
            ><img src="../../../public/imgs/home.png" alt="" />
            <h2 class="text_titel">个人支付收款系统<span class="laer">v2.0</span></h2>
            <div class="link_warp">
              <div class="link_pay">
                <p class="link_pay_text">立即体验</p>
                <div class="pay_img">
                  <p class="pay_laer">体验移动端</p>
                  <img src="../../../public/imgs/my_web.png" alt="" />
                </div>
              </div>
              <a href="https://github.com/asd494235908/DcPay" target="_blank"
                ><div class="link_text">开发文档</div></a
              >
            </div></a-col
          >
          <a-col
            :xs="{ span: 2 }"
            :sm="{ span: 2 }"
            :lg="{ span: 4 }"
            :md="{ span: 4 }"
            :xl="{ span: 4 }"
            :xxl="{ span: 4 }"
          ></a-col>
        </a-row>
        <a-row type="flex" align="middle" justify="center" class="cnetent_imges">
          <a-col
            :xs="{ span: 2 }"
            :sm="{ span: 2 }"
            :lg="{ span: 4 }"
            :md="{ span: 4 }"
            :xl="{ span: 4 }"
            :xxl="{ span: 4 }"
          >
          </a-col>
          <a-col
            :xs="{ span: 20 }"
            :sm="{ span: 20 }"
            :lg="{ span: 16 }"
            :md="{ span: 16 }"
            :xl="{ span: 16 }"
            :xxl="{ span: 16 }"
          >
            <div class="phone">
              <img src="../../../public/imgs/Scene6.png" alt="" />
            </div>
            <div class="icon1 icon">免费</div>
            <div class="icon2 icon">直达账户</div>
            <div class="icon3 icon">开源</div>
            <div class="icon4 icon">简约</div>
            <div class="icon5 icon">无需签约</div>
          </a-col>
          <a-col
            :xs="{ span: 2 }"
            :sm="{ span: 2 }"
            :lg="{ span: 4 }"
            :md="{ span: 4 }"
            :xl="{ span: 4 }"
            :xxl="{ span: 4 }"
          ></a-col>
        </a-row>
      </a-col>
      <a-col
        :xs="{ span: 0 }"
        :sm="{ span: 0 }"
        :lg="{ span: 2 }"
        :md="{ span: 2 }"
        :xl="{ span: 4 }"
        :xxl="{ span: 4 }"
      ></a-col>
    </a-row>
    <div class="btn">
      <a-button type="primary" shape="round" class="btn_laer" @click="goScrolltop">
        <template #icon><DownOutlined /></template>
      </a-button>
    </div>
  </div>
</template>

<script>
import { nextTick, reactive, toRefs } from "vue";
import { DownOutlined } from "@ant-design/icons-vue";
export default {
  components: { DownOutlined },
  setup() {
    const state = reactive({
      count: 0,
    });
    const goScrolltop = () => {
      nextTick(() => {
        //平滑设置滚动条
        const top = document.querySelector(".warp");
        let i = document.documentElement.scrollTop;
        let timer = null;
        timer = setInterval(() => {
          i+=10;
          if (i > top.offsetHeight) {
            clearInterval(timer);
            return;
          } else {
            document.documentElement.scrollTop = i;
          }
        }, 0);
      });
    };
    return {
      ...toRefs(state),
      goScrolltop,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/theme.scss";
.home_warp {
  margin-top: 90px;
  padding-bottom: 30px;
  .btn {
    margin-top: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .btn_laer {
      width: 40px;
      height: 40px;
      color: $c3;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      background-color: $cf;
    }
  }
  .cnetent {
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    .cnetent_text {
      flex: 1.3;
      margin-bottom: 60px;
      .text {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .link_warp {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 40px;
          .link_pay,
          .link_text {
            width: 120px;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: $cf;
            font-size: 16px;
            font-weight: bold;
            margin: 0 20px;
            border-radius: 4px;
            cursor: pointer;
          }
          .link_pay:hover {
            background-color: rgba(0, 0, 0, 0.6);
          }
          .link_pay:hover .pay_img {
            display: block;
          }
          .link_pay {
            background-color: rgb(255, 54, 54);
            transition: all 0.3s ease-in-out;
            position: relative;
            .pay_img {
              display: none;
              position: absolute;
              top: 70px;
              background-color: $cf;
              color: $c6;
              box-shadow: 0 0px 4px rgba(0, 0, 0, 0.3);
              border-radius: 4px;
              z-index: 99;
              img {
                width: 200px;
                height: 200px;
                padding: 10px;
              }
            }
            .pay_laer {
              text-align: center;
              height: 42px;
              line-height: 42px;
              border-bottom: 1px solid $xt;
            }
            .pay_img::after {
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
          .link_text:hover {
            background-color: rgba(0, 0, 0, 0.6);
            color: $cf;
          }
          .link_text {
            background-color: $cf;
            color: $c6;
            transition: all 0.3s ease-in-out;
          }
        }
      }
      img {
        width: 250px;
        height: 100%;
        object-fit: cover;
      }
      .text_titel {
        font-size: 36px;
        font-weight: bold;
        color: $cf;
        margin-top: 30px;
      }
      .laer {
        font-size: 20px;
      }
    }
    .cnetent_imges {
      flex: 2;
      margin-top: 60px;
      .icon {
        position: absolute;

        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;

        border-radius: 50%;
      }
      .icon1 {
        top: 90px;
        left: -20px;
        width: 80px;
        height: 80px;
        background-color: rgb(255, 54, 54);
        color: $cf;
      }
      .icon2 {
        top: 0;
        right: -20px;
        width: 100px;
        height: 100px;
        color: $c6;
        background-color: rgb(255, 251, 34);
      }
      .icon3 {
        top: 380px;
        right: 0px;
        width: 60px;
        height: 60px;
        color: $c6;
        background-color: $cf;
      }
      .icon4 {
        top: 200px;
        right: -20px;
        width: 60px;
        height: 60px;
        color: $cf;
        background-color: rgba($color: #000000, $alpha: 0.3);
      }
      .icon5 {
        top: 350px;
        left: -20px;
        width: 90px;
        height: 90px;
        color: $cf;
        background-color: #176ff3;
      }
      .phone {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 260px;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
