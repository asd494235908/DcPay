<template>
  <div class="pay_content">
    <herder></herder>
    <my-titel title="DcPay收银后台，收款方MiKe">
      <template #content>
        <div class="top">
          <p class="top_text">请填写捐赠信息</p>
          <p class="top_info">
            捐赠金额大于套餐金额，系统自动大于金额上一级将<span>【最新源码】</span>发送至您的邮箱内。
          </p>
          <p class="top_info">带<span>*</span>号的为必填项</p>
          <p class="top_info esc">捐赠不起的订单，将于每日11点通过邮件发送至您的邮箱。</p>
        </div>
        <div class="contet">
          <form>
            <div class="left">
              <!-- 邮箱开始 -->
              <div class="meail" :ref="meailDom">
                <p class="text"><i class="desc">*</i>邮箱:</p>
                <div class="input">
                  <a-input
                    class="input_contnet"
                    :class="{ email_err: isEmail }"
                    v-model:value="email"
                    placeholder="请输入您的邮箱(推荐qq邮箱)"
                    allowClear
                  />
                </div>
              </div>
              <!-- 邮箱结束 -->
              <!-- 昵称开始 -->
              <div class="name">
                <p class="text"><i class="desc">*</i>昵称:</p>
                <div class="input">
                  <a-input
                    class="input_contnet"
                    v-model:value="name"
                    placeholder="请输入您的昵称"
                    allowClear
                  />
                </div>
              </div>
              <!-- 昵称结束 -->
              <!-- 套餐开始 -->
              <div class="paytype">
                <p class="text"><i class="desc">*</i>套餐:</p>
                <div class="input">
                  <a-select
                    v-model:value="SetmealVal"
                    class="input_contnet"
                    placeholder="请选择您的地区"
                    @change="onCityChangePaytype"
                    ><a-select-option
                      v-for="item in Setmeal"
                      :value="item.id"
                      :key="item.index"
                    >
                      {{ item.titel }}
                    </a-select-option></a-select
                  >
                </div>
              </div>
              <!-- 套餐结束 -->
              <!-- 金额开始 -->
              <div class="price" v-if="isPrice">
                <p class="text"><i class="desc">*</i>金额:</p>
                <div class="input">
                  <a-input
                    class="input_contnet"
                    v-model:value="price"
                    type="Number"
                    placeholder="请输入金额"
                    @blur="handelPrcieBlur"
                    allowClear
                  />
                </div>
              </div>
              <!-- 金额结束 -->
              <!-- 套餐说明开始 -->
              <div class="info">
                <p class="text"><i class="desc">&nbsp;</i>说明:</p>
                <div class="input">
                  <div class="input_contnet laer">{{ info }}</div>
                </div>
              </div>
              <!-- 套餐说明结束 -->
              <!-- 留言 -->
              <div class="price">
                <p class="text"><i class="desc"></i>留言:</p>
                <div class="input">
                  <a-textarea
                    class="input_contnet"
                    v-model:value="mesg"
                    placeholder="说点什么吧"
                    auto-size
                    :maxlength="300"
                  />
                </div>
              </div>
              <!-- 留言 -->
            </div>
            <div class="right">
              <!-- 联系方式 -->
              <div class="price">
                <p class="text"><i class="desc"></i>电话:</p>
                <div class="input">
                  <a-input
                    class="input_contnet"
                    v-model:value="phone"
                    type="Number"
                    placeholder="请输入您的联系方式"
                    allowClear
                  />
                </div>
              </div>
              <!-- 联系方式 -->
              <!-- 省市开始 -->
              <div class="city">
                <p class="text"><i class="desc">&nbsp; </i>省市:</p>
                <div class="input">
                  <a-select
                    :showSearch="true"
                    v-model:value="city1"
                    class="input_contnet"
                    placeholder="请选择您的城市"
                    @change="onCityChange"
                    ><a-select-option
                      v-for="item in city"
                      :value="item.name"
                      :key="item.index"
                    >
                      {{ item.name }}
                    </a-select-option></a-select
                  >
                </div>
              </div>
              <!-- 省市结束 -->
              <!-- 城市开始 -->
              <div class="street">
                <p class="text"><i class="desc">&nbsp; </i>城市:</p>
                <div class="input">
                  <a-select
                    :showSearch="true"
                    v-model:value="city2"
                    class="input_contnet"
                    placeholder="请选择您的城市"
                    @change="onCityChange2"
                    ><a-select-option
                      v-for="item in Incity2"
                      :value="item.name"
                      :key="item.index"
                    >
                      {{ item.name }}
                    </a-select-option></a-select
                  >
                </div>
              </div>
              <!-- 城市结束 -->
              <!-- 区镇开始 -->
              <div class="town">
                <p class="text"><i class="desc">&nbsp; </i>区镇:</p>
                <div class="input">
                  <a-select
                    :showSearch="true"
                    v-model:value="city3"
                    class="input_contnet"
                    placeholder="请选择您的地区"
                    @change="onCityChange3"
                    ><a-select-option
                      v-for="item in Incity3"
                      :value="item.name"
                      :key="item.index"
                    >
                      {{ item.name }}
                    </a-select-option></a-select
                  >
                </div>
              </div>
              <!-- 区镇结束 -->
              <!-- 联系方式 -->
              <div class="price">
                <p class="text"><i class="desc"></i>详情:</p>
                <div class="input">
                  <a-input
                    class="input_contnet"
                    v-model:value="address_info"
                    placeholder="请输入您的地址详情街道/小区"
                    allowClear
                  />
                </div>
              </div>
              <!-- 联系方式 -->
            </div>
          </form>
          <!-- 付款方式 -->
          <div class="pay_id">
            <p class="text"><i class="desc"></i>支付方式:</p>
            <div class="input">
              <div class="play_items">
                <div
                  class="in_alipay"
                  @click="handelPlay(0)"
                  :class="{ play_active: play_id === 0 }"
                >
                  <img src="../../../public/img/alipay@2x.png" alt="" />
                  <p class="desc">官方</p>
                </div>
                <div
                  class="out_alipay"
                  @click="handelPlay(1)"
                  :class="{ play_active: play_id === 1 }"
                >
                  <img src="../../../public/img/alipay@2x.png" alt="" />
                  <p class="desc">免签</p>
                </div>

                <div
                  class="out_weixin"
                  @click="handelPlay(2)"
                  :class="{ play_active: play_id === 2 }"
                >
                  <img src="../../../public/img/weixinpay@2x.png" alt="" />
                  <p class="desc">免签</p>
                </div>
              </div>
            </div>
          </div>
          <!-- 付款方式 -->
          <div class="btn_warp">
            <a-button
              class="btn"
              type="primary"
              block
              :loading="isLoading"
              @click="subMint"
            >
              提交捐赠信息
            </a-button>
          </div>
        </div>
      </template>
    </my-titel>
  </div>
  <Buttom></Buttom>
</template>

<script>
import {
  reactive,
  toRefs,
  onMounted,
  getCurrentInstance,
  nextTick,
  h,
  createVNode,
} from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { setStore } from "@/utils/storage.js";
import { message, Modal } from "ant-design-vue";
import Herder from "@/components/herder/index.vue";
import MyTitel from "@/components/my_titel/index.vue";
import Buttom from "@/components/buttom/index.vue";
import { ExclamationCircleOutlined } from "@ant-design/icons-vue";
export default {
  components: { Herder, MyTitel, Buttom, ExclamationCircleOutlined },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const { proxy } = getCurrentInstance();
    const state = reactive({
      count: 0,
      isEmail: false,
      defaultProps1: {
        label: "name",
        value: "name",
        children: "districts",
      },
      Setmeal: [],
      SetmealVal: "",
      price: "",
      phone: "",
      isPrice: false,
      info: "您还未选择",
      city: [],
      Incity2: [],
      Incity3: [],

      email: "",
      name: "",
      city1: "",
      city2: "",
      city3: "",
      play_id: 100,
      address_info: "",
      isLoading: false,
      mesg: "",
      currntInfo: {},
    });

    onMounted(() => {
      initCity();
      initPayTpye();
    });
    const initCity = async () => {
      const res = await proxy.$http.get("/api/city");
      if (res.data.success === true) {
        state.city = res.data.data;
      } else {
        message.error("获取城市列表失败");
      }
    };
    const initPayTpye = async () => {
      const res = await proxy.$http.post("/api/payType");
      if (res.data.success === true) {
        state.Setmeal = res.data.data;
      } else {
        message.error("获取套餐失败");
      }
    };
    const onCityChange = (e) => {
      state.city2 = "";
      state.city3 = "";
      state.city.forEach((item) => {
        if (item.name === e) {
          state.Incity2 = item.districts;
        }
      });
    };
    const onCityChange2 = (e) => {
      state.city3 = "";
      state.Incity2.forEach((item) => {
        if (item.name === e) {
          state.Incity3 = item.districts;
        }
      });
    };

    const onCityChange3 = (e) => {};
    const onCityChangePaytype = (e) => {
      state.price = "";
      state.Setmeal.forEach((item) => {
        if (item.id === e) {
          state.currntInfo = item;
          state.price = item.price;
          state.info = item.info;
        }
        if (e === 100) {
          state.isPrice = true;
        } else {
          state.isPrice = false;
        }
      });
    };
    const handelPlay = (idx) => {
      state.play_id = idx;
    };
    let dom1 = "";
    const meailDom = (el) => {
      dom1 = el;
      return el;
    };
    //邮箱
    const email_blur = () => {
      if (state.email === "") {
        state.isEmail = true;
        message.error("请输入邮箱");
        nextTick(() => {
          if (window.pageYOffset) {
            window.pageYOffset = dom1.scrollHeight;
          }
          if (document.documentElement.scrollTop) {
            document.documentElement.scrollTop = dom1.scrollHeight;
          }
          if (document.body.scrollTop) {
            document.body.scrollTop = dom1.scrollHeight;
          }
        });
        return false;
      }
      const reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      if (!reg.test(state.email)) {
        state.isEmail = true;
        message.error("邮箱格式输入错误请从新输入");
        return false;
      }

      state.isEmail = false;
      return true;
    };
    //判断是否选择了套餐
    const isSet_meal = () => {
      if (state.SetmealVal === "") {
        message.warning("请选择套餐");
        return false;
      }
      if (state.SetmealVal === 100) {
        if (state.price === 0 || state.price === null || state.price === "") {
          message.warning("请输入您的金额");
          return false;
        }
      }

      return true;
    };
    //判断是否选择支付方式
    const isPlay = () => {
      if (state.play_id === 100) {
        message.warning("请选择付款方式");
        return false;
      }
      return true;
    };
    //判断是否选填写了昵称
    const isSet_Name = () => {
      if (state.name === "") {
        message.warning("请填写昵称");
        return false;
      }
      return true;
    };
    const handelPrcieBlur = () => {
      if (state.price !== "") {
        state.price = Number(state.price).toFixed(2);
        console.log(state.price == 0);
      }
    };
    //订单编号
    const _getOriderId = () => {
      let time = new Date();
      const year = time.getFullYear();
      const Month = time.getMonth() + 1;
      const date = time.getDate();
      const Hours = time.getHours();
      const Minutes = time.getMinutes();
      const Seconds = time.getSeconds();
      const id = `${year}${_towNum(Month)}${_towNum(date)}${_towNum(Hours)}${_towNum(
        Minutes
      )}${_towNum(Seconds)}`;
      return id;
    };
    const _towNum = (num) => {
      return num < 10 ? "0" + num : num;
    };
    const defalAddress = () => {
      if (state.city3 !== "") {
        return `${state.city1}-${state.city2}-${state.city3}`;
      } else if (state.city2 !== "") {
        return `${state.city1}-${state.city2}`;
      } else if (state.city1 !== "") {
        return `${state.city1}`;
      } else {
        return "";
      }
    };
    const subMint = () => {
      if (!email_blur()) return;
      if (!isSet_Name()) return;
      if (!isSet_meal()) return;
      if (!isPlay()) return;
      if (state.price == 0) {
        message.warning("请输入金额");
        return;
      }
      //判断是否为QQ邮箱
      const isqq = /^\w{3,}@qq.com$/;
      if (!isqq.test(state.email)) {
        Modal.confirm({
          title: "提示",
          content: h("div", {}, [
            h("p", `推荐使用QQ邮箱，其他邮箱可能被拦截或者放置在垃圾邮箱内`),
          ]),
          icon: createVNode(ExclamationCircleOutlined),
          okText: "确定",
          okType: "danger",
          cancelText: "我在改改",
          onOk() {
                goPay();
          },
          onCancel() {
          },
        });
      } else {
        goPay();
      }
    };
    const goPay = async () => {
      state.isLoading = true;
      const user_info = {
        phone: state.phone,
        address: defalAddress(),
        address_info: state.address_info,
      };
      const order_id = _getOriderId();
      const res = await proxy.$http.post("/api/DcPlay", {
        play_id: state.play_id,
        order_id,
        userNickName: state.name,
        info: state.currntInfo,
        pirce_info: state.SetmealVal,
        pirce: state.price,
        email: state.email,
        address: user_info,
        mesg: state.mesg,
        isNum: state.isPrice ? 1 : 0,
      });
      if (res.data.success === true) {
        const data = {
          order_id,
          img_url: res.data.data,
          url: res.data.url,
          play_id: state.play_id,
          pirce: state.price,
          token: res.data.token,
          payNum: res.data.payNum,
        };
        setStore("pay_info", data);
        state.isLoading = false;
        router.push({
          path: "/pay_info",
        });
      } else {
        message.error("订单错误请重试");
      }
    };
    return {
      ...toRefs(state),
      onCityChange,
      onCityChange2,
      onCityChange3,
      onCityChangePaytype,
      handelPlay,
      subMint,
      meailDom,
      handelPrcieBlur,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/theme.scss";
.email_err {
  border-color: $jcg;
}
.contet {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  .pay_id {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 10px 0;
  }
  .text {
  }
  .input {
  }
  .play_items {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    user-select: none;
    // margin: 10px;
    .out_weixin,
    .out_alipay,
    .in_alipay {
      width: 260px;
      height: 80px;
      border: 2px solid $xt;
      border-radius: 4px;
      overflow: hidden;
      position: relative;
      padding: 10px;
      margin-right: 10px;
      margin-top: 10px;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .desc {
      position: absolute;
      right: 0;
      top: 0;
      width: 40px;
      height: 30px;
      background-color: $main-col;
      color: $cf;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      border-radius: 0 0 0 4px;
    }
    .play_active {
      border: 2px solid $main-col;
    }
    .out_alipay {
    }
    .out_weixin {
    }
  }
  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    font-weight: bold;
    .left,
    .right {
      margin: 0 30px;
    }
  }
  .btn_warp {
    width: 100%;
    max-width: 300px;
    padding: 0 30px 20px;
    margin: 30px;
    .btn {
      width: 100%;
      height: 40px;
    }
  }
  .info .laer {
    border-radius: 2px;
    border: 1px solid #d9d9d9;
    padding: 6px 4px;
  }
  .price,
  .meail,
  .name,
  .info,
  .paytype,
  .town,
  .street,
  .city {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 10px;
    .text {
      width: 260px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .desc {
        color: $jcg;
      }
    }

    .input {
      .input_contnet {
        width: 260px;
      }
    }
  }
}

.top {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .top_text {
    margin-top: 20px !important;
    font-size: 22px;
    font-weight: bold;
    color: $main-col;
    cursor: pointer;
  }
  .top_info {
    margin-top: 10px !important;
    width: 100%;
    padding: 0 20px;
    font-size: 16px;
    // white-space: normal;
    // word-break: break-all;
    text-align: center;
    font-weight: bold;
    span {
      color: $jcg;
    }
  }
  .esc {
    color: $cc;
    font-size: 14px;
  }
}
</style>
