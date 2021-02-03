<template>
  <div>
    <herder></herder>
    <my-titel title="DcPay收银后台，收款方MiKe">
      <template #content>
        <p class="top">
          <i class="iconfont">&#xe600;</i> 请使用<span :style="'color:' + isPlayStyle">{{
            isPlay
          }}</span
          >打开扫一扫捐赠
        </p>
        <p class="top">
          请勿刷新页面
        </p>
        <p class="top">
          <AlipayOutlined
            v-if="data.play_id !== 2"
            class="icon"
            :style="'color:' + isPlayStyle"
          />
          <WechatOutlined
            v-if="data.play_id === 2"
            class="icon"
            :style="'color:' + isPlayStyle"
          />
        </p>
        <div class="content">
          <div class="img_warp">
            <img :src="data.img_url" alt="" />
            <div class="img_mask" v-if="isNoPlay">二维码已失效</div>
          </div>
        </div>
        <div class="buttom">
          <p class="test" v-if="seveBtn">提示：长按图片保存</p>
          <div>
            <a-button class="btn" v-if="seveBtn" type="primary"
              ><a :href="data.url">一键启动支付宝支付</a></a-button
            >
          </div>
          <p class="time_laer">
            <span>付款将于</span
            ><a-statistic-countdown
              :value="play_time"
              format=" m 分 s 秒"
              class="timer"
              valueStyle="color:#f05247;font-size:18px"
              @finish="handelchangeEnd"
            />后结束，超时请重新发起支付
          </p>
        </div>
      </template>
    </my-titel>
  </div>
  <Buttom></Buttom>
</template>

<script>
import {
  onMounted,
  reactive,
  toRefs,
  nextTick,
  h,
  computed,
  onUnmounted,
  getCurrentInstance,
} from "vue";
import { getStore, removeStore } from "@/utils/storage.js";
import { useRoute, useRouter } from "vue-router";
import Herder from "@/components/herder/index.vue";
import MyTitel from "@/components/my_titel/index.vue";
import Buttom from "@/components/buttom/index.vue";
import { Modal, message } from "ant-design-vue";
import { AlipayOutlined, WechatOutlined } from "@ant-design/icons-vue";
export default {
  components: { Herder, MyTitel,Buttom, AlipayOutlined, WechatOutlined },
  setup() {
    const { proxy } = getCurrentInstance();
    const route = useRoute();
    const router = useRouter();
    const state = reactive({
      count: 0,
      data: {},
      play_time: 0,
      isdescImg: "",
      isPlayStyle: "",
      seveBtn: false,
      isGoPay_btn: false,
      img_mask: false,
      isNoPlay: false,
    });
    onMounted(() => {
      isMobile();
      if (state.seveBtn === true) {
        if (!isWeXin()) {
          state.isGoPay_btn = true;
        } else {
          state.isGoPay_btn = false;
        }
        if (!isQQ()) {
          state.isGoPay_btn = true;
        } else {
          state.isGoPay_btn = false;
        }
        if (state.data.play_id === 2) {
          state.isGoPay_btn = false;
        } else {
          state.isGoPay_btn = true;
        }
      }
      initData();
       window.addEventListener('beforeunload', e => beforeunloadFn(e))
    });
    onUnmounted(() => {
      removeStore("pay_info");
      handelchangeEnd();
       window.removeEventListener('beforeunload', e => beforeunloadFn(e))
    });
    const beforeunloadFn = ()=>{
      removeStore("pay_info");
    }
    //判断是pc还是移动端
    const isMobile = () => {
      if (
        navigator.userAgent.match(
          /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
        )
      ) {
        state.seveBtn = true;
      } else {
        state.seveBtn = false;
      }
    };
    //判断是否qq浏览器
    const isQQ = () => {
      let ua = window.navigator.userAgent.toLowerCase();
      if (ua.match(/QQ/i) == "qq") {
        return true;
      }
      return false;
    };
    //判断是否时微信浏览器
    const isWeXin = () => {
      let ua = window.navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
      }
      return false;
    };
    const initData = () => {
      if (getStore("pay_info") === null) {
        _back();
        return;
      }
      state.data = JSON.parse(getStore("pay_info"));
      // if(state.data.payNum !=="" ||state.data.payNum !==null)
      if (state.data.payNum !== undefined) {
        nextTick(() => {
          console.log(state.isdescImg);
          Modal.info({
            okText: "我知道了",
            title: "重要(必填)",
            content: h("div", { class: "mask_Warp" }, [
              h("div", { class: "desc_img" }, [h("img", { src: state.isdescImg })]),
              h("p", { class: "paNum" }, `请在支付时候添加备注号`),
              h("p", { class: "paNum" }, `${state.data.payNum}(重要)`),
            ]),
            onOk() {
              state.play_time = Date.now() + 300000;
              updata_pay();
              console.log("授权倒计时");
            },
          });
        });
      } else {
        updata_pay();
        state.play_time = Date.now() + 300000;
      }
    };
    const _back = () => {
      setTimeout(() => {
        router.go(-1);
      }, 2000);
      message.error("参数错误，即将返回上一页");
    };
    const isPlay = computed(() => {
      switch (state.data.play_id) {
        case null:
          return "";
          break;
        case 0:
          state.isPlayStyle = "#3d8bff";
          state.isdescImg = "https://www.dcmaomi.com:3000/serverImage/bz.png"; //改成支付宝的
          return "支付宝";
          break;
        case 1:
          state.isPlayStyle = "#3d8bff";
          state.isdescImg = "https://www.dcmaomi.com:3000/serverImage/bz.png"; //改成支付宝的
          return "支付宝";
          break;
        case 2:
          state.isPlayStyle = "#07c967";
          state.isdescImg = "https://www.dcmaomi.com:3000/serverImage/bz.png"; //微信金额备注图
          return "微信";
          break;
      }
    });
    //倒计时结束之后的操作
    const handelchangeEnd = () => {
      state.isNoPlay = true;
      updata_pay();
      removeStore("pay_info");
      console.log("倒计时结束");
    };
    const updata_pay = () => {
      if (!state.isNoPlay) {
        state.timer = setInterval(async () => {
          const res = await proxy.$http.post("/api/orderType", {
            token: state.data.token,
          });
          if (res.data.cood === 400) {
          } else if (res.data.cood === 402) {
            // "订单已被驳回请重新下单"
            pay_back();
          } else if (res.data.cood === 401) {
            //  "数据有误请重试"
            pay_warning();
          } else if (res.data.cood === 500) {
            // "请求被驳回"
            pay_back();
          } else if (res.data.cood === 200) {
            // "支付成功"
            pay_success();
          }
        }, 1000);
      } else {
        clearInterval(state.timer);
        console.log("结束请求");
      }
    };
    //订单支付数据有误
    const pay_warning = () => {
      handelchangeEnd();
      Modal.warning({
        title: "支付数据",
        content: h("div", {}, [
          h("p", `支付数据有误，或许时服务器内部的原因`),
          h("p", `点击确定返回上一页`),
        ]),
        onOk() {
          removeStore("pay_info");
          _back();
        },
      });
    };
    //订单支付成功的操作
    const pay_success = () => {
      handelchangeEnd();
      Modal.success({
        title: "支付成功",
        content: h("div", {}, [
          h("p", `恭喜你支付成功，赠品将通过邮件发送至您的邮箱`),
          h("p", `点击确定返回上一页`),
        ]),
        onOk() {
          removeStore("pay_info");
          setTimeout(() => {
            router.go(-1);
          }, 2000);
        },
      });
    };
    //订单被驳回的操作
    const pay_back = () => {
      handelchangeEnd();
      Modal.error({
        title: "请求被驳回",
        content: h("div", {}, [
          h("p", `请求支付被驳回，支付失败，请联系管理员`),
          h("p", `点击确定返回上一页`),
        ]),
        onOk() {
          _back();
          removeStore("pay_info");
        },
      });
    };
    return {
      ...toRefs(state),
      isPlay,
      handelchangeEnd,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/theme.scss";
.buttom {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 40px;
  .test {
    width: 100%;
    height: 24px;
    text-align: center;
    margin: 5px 0 !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .time_laer {
    width: 100%;
    height: 24px;
    margin: 5px 0 !important;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 18px;
    .timer {
      position: relative;
      top: -1px;
    }
  }
  .btn {
  }
}

.top {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  font-size: 18px;
  font-weight: bold;
  .iconfont {
    font-size: 20px !important;
    margin: 0 10px;
  }
  .icon {
    font-size: 34px;
  }
}
.content {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .img_warp {
    width: 250px;
    height: 250px;
    position: relative;
    border: 1px solid $xt;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .img_mask {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba($color: $cf, $alpha: 0.9);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font-weight: bold;
  }
}
</style>
