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
      <img src="../../../public/imgs/5-160914192R6-50.gif" alt="" />
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
            // store.commit("seveMask", false);
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
