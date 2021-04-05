<template>
  <div class="warp">
    <herder></herder>
    <home></home>
  </div>
  <div class="content_box">
    <introduce></introduce>
    <swiper></swiper>
    <payment-process></payment-process>
    <evaluate></evaluate>
    <buttom></buttom>
  </div>
  <div class="mask" :class="{ ismask: maske }">
    <div class="mask_content">
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#fff"
        class="loding"
      >
        <g fill="none" fill-rule="evenodd" stroke-width="2">
          <circle cx="22" cy="22" r="1">
            <animate
              attributeName="r"
              begin="0s"
              dur="1.8s"
              values="1; 20"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.165, 0.84, 0.44, 1"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              begin="0s"
              dur="1.8s"
              values="1; 0"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.3, 0.61, 0.355, 1"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="22" cy="22" r="1">
            <animate
              attributeName="r"
              begin="-0.9s"
              dur="1.8s"
              values="1; 20"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.165, 0.84, 0.44, 1"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              begin="-0.9s"
              dur="1.8s"
              values="1; 0"
              calcMode="spline"
              keyTimes="0; 1"
              keySplines="0.3, 0.61, 0.355, 1"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
import { computed, nextTick, onMounted, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import Herder from "@/components/home_herder/index.vue";
import Home from "@/views/home/index.vue";
import Introduce from "@/views/introduce/index.vue";
import Swiper from "@/components/swiper/index.vue";
import PaymentProcess from "@/views/PaymentProcess/index.vue";
import Evaluate from "@/views/evaluate/index.vue";
import Buttom from "@/components/buttom/index.vue";
export default {
  components: { Herder, Swiper, Home, Introduce, PaymentProcess, Evaluate, Buttom },
  setup() {
    const store = useStore();
    const state = reactive({});
    const imgArr = [
      require("../../../public/imgs/5-160914192R6-50.gif"),
      require("../../../public/imgs/bg.png"),
      require("../../../public/imgs/Scene6.png"),
      require("../../../public/imgs/pay_home_1.png"),
      require("../../../public/imgs/pay_home_2.png"),
      require("../../../public/imgs/pay_home_3.png"),
      require("../../../public/imgs/pay_home_4.png"),
      require("../../../public/imgs/pay_1.jpg"),
      require("../../../public/imgs/pay_2.jpg"),
      require("../../../public/imgs/pay_3.jpg"),
    ];
    onMounted(() => {
      nextTick(() => {
        const imgesAll = imgArr.map((item) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = item;
            img.onload = () => {
              resolve(item);
            };
            img.onerror = () => {
              reject(new Error(item + "失败"));
            };
          });
        });
        Promise.all(imgesAll)
          .then(() => {
            store.commit("seveMask", true);
          })
          .catch(() => {
            store.commit("seveMask", true);
          });
      });
    });
    const maske = computed(() => {
      return store.state.maske;
    });
    return {
      ...toRefs(state),
      maske,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/theme.scss";

.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  background-color: rgb(43, 44, 48);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: all 0.3s ease-in-out;
  .mask_content{
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  .loding{
    margin: 0 auto;
  }
}
}
.ismask {
  opacity: 0;
  transform: scale(0);
}
.warp {
  background: url("../../../public/imgs/bg.png") no-repeat top center;
  // width: 100%;
  // height: 100%;
  min-height: 1000px;
  // background-size: cover;
}
.content_box {
  padding-top: 60px;
  background: url("../../../public/imgs/bg_y.png") repeat-y top center;
}

</style>
