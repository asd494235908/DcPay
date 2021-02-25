<template>
  <div class="box">
    <div class="nav">
      <a-row type="flex" align="middle" justify="center">
        <a-col
          :xs="{ span: 0, offset: 0 }"
          :sm="{ span: 0, offset: 0 }"
          :lg="{ span: 0, offset: 0 }"
          :md="{ span: 0, offset: 0 }"
          :xl="{ span: 2, offset: 0 }"
          :xxl="{ span: 4, offset: 0 }"
        ></a-col>
        <a-col
          :xs="{ span: 10, offset: 0 }"
          :sm="{ span: 10, offset: 0 }"
          :lg="{ span: 6, offset: 0 }"
          :md="{ span: 6, offset: 0 }"
          :xl="{ span: 4, offset: 0 }"
          :xxl="{ span: 4, offset: 0 }"
        >
          <div class="img_warp">
            <router-link to="/"
              ><img src="../../../public/imgs/logoFFF.png" alt=""
            /></router-link>
          </div>
        </a-col>
        <a-col
          :xs="{ span: 0, offset: 0 }"
          :sm="{ span: 0, offset: 0 }"
          :lg="{ span: 14, offset: 0 }"
          :md="{ span: 14, offset: 0 }"
          :xl="{ span: 14, offset: 0 }"
          :xxl="{ span: 8, offset: 0 }"
        >
          <ul class="nav_warp">
            <li class="nav_item"><router-link to="/">首页</router-link></li>
            <li class="nav_item"><router-link to="/pay">体验支付</router-link></li>
            <li class="nav_item"><router-link to="/donation">捐赠名单</router-link></li>
            <li class="nav_item"><a href="https://www.dcmaomi.com">DcMm</a></li>
            <li class="nav_item"><a href="https://tm.dcmaomi.com">TerMinal</a></li>
            <li class="nav_item">
              <router-link to="/Mobile">移动商城</router-link>
            </li>
          </ul></a-col
        >
        <a-col
          :xs="{ span: 10, offset: 0 }"
          :sm="{ span: 10, offset: 0 }"
          :lg="{ span: 4, offset: 0 }"
          :md="{ span: 4, offset: 0 }"
          :xl="{ span: 2, offset: 0 }"
          :xxl="{ span: 4, offset: 0 }"
          class="icon_warp"
          ><i class="iconfont home"><router-link to="/pay">&#xe61f;</router-link></i
          ><i class="iconfont git"><a href="https://github.com/asd494235908/DcPay" target="_blank">&#xe628;</a></i>
          <div class="qun">
            <i class="iconfont qq">&#xe629;</i>
            <div class="img">
              <img src="../../../public/imgs/qqimg.png" alt="" />
            </div></div
        ></a-col>
        <a-col
          class="btn_warp"
          :xs="{ span: 4, offset: 0 }"
          :sm="{ span: 4, offset: 0 }"
          :lg="{ span: 0, offset: 0 }"
          :md="{ span: 0, offset: 0 }"
          :xl="{ span: 0, offset: 0 }"
          :xxl="{ span: 0, offset: 0 }"
          ><a-button class="btn" type="primary" size="default" @click="handelNavLaer">
            <template #icon
              ><UnorderedListOutlined class="icon" v-if="!isShowlaer" />
              <CloseOutlined class="icon" v-if="isShowlaer"
            /></template> </a-button
        ></a-col>
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
      <div class="nav_laer" :class="{ nav_laer_show: isShowlaer }">
        <ul class="nav_laer_warp">
          <li class="nav_laer_item"><router-link to="/">首页</router-link></li>
          <li class="nav_laer_item"><router-link to="/pay">体验支付</router-link></li>
          <li class="nav_laer_item">
            <router-link to="/donation">捐赠名单</router-link>
          </li>
          <li class="nav_laer_item"><a href="https://www.dcmaomi.com">DcMm</a></li>
          <li class="nav_laer_item"><a href="https://tm.dcmaomi.com">TerMinal</a></li>
          <li class="nav_laer_item"><router-link to="/Mobile">移动商城</router-link></li>
        </ul>
      </div>
      <a-row
        type="flex"
        align="middle"
        justify="center"
        class="nav_buttom_laer"
        :class="{ laer_top: isShowlaer }"
      >
        <a-col
          :xs="{ span: 0, offset: 0 }"
          :sm="{ span: 0, offset: 0 }"
          :lg="{ span: 0, offset: 0 }"
          :md="{ span: 2, offset: 0 }"
          :xl="{ span: 2, offset: 0 }"
          :xxl="{ span: 4, offset: 0 }"
        ></a-col>
        <a-col
          :xs="{ span: 24, offset: 0 }"
          :sm="{ span: 24, offset: 0 }"
          :lg="{ span: 24, offset: 0 }"
          :md="{ span: 20, offset: 0 }"
          :xl="{ span: 20, offset: 0 }"
          :xxl="{ span: 16, offset: 0 }"
        >
          <p class="copy">
            <a href="https://dcpay.dcmaomi.com">dcpay.dcmaomi.com</a
            ><span>©2020--Present. All Rights Reserved</span>
          </p>
          <p class="beian">
            <a href="http://beian.miit.gov.cn">蜀ICP备2020033541号</a>
          </p></a-col
        >

        <a-col
          :xs="{ span: 0, offset: 0 }"
          :sm="{ span: 0, offset: 0 }"
          :lg="{ span: 0, offset: 0 }"
          :md="{ span: 2, offset: 0 }"
          :xl="{ span: 2, offset: 0 }"
          :xxl="{ span: 4, offset: 0 }"
        >
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import {
  reactive,
  toRefs,
  getCurrentInstance,
  onMounted,
  onUnmounted,
  computed,
} from "vue";
import { useStore } from "vuex";
import { UnorderedListOutlined, CloseOutlined } from "@ant-design/icons-vue";
export default {
  components: { UnorderedListOutlined, CloseOutlined },
  setup() {
    const store = useStore();
    const { proxy } = getCurrentInstance();
    const state = reactive({
      isShowlaer: false,
    });
    const handelNavLaer = () => {
      state.isShowlaer = !state.isShowlaer;
    };
    onMounted(() => {
      window.addEventListener("scroll", IndexScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", IndexScroll);
    });
    const IndexScroll = () => {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 50) {
        store.commit("changeNav_Data", true);
      } else {
        store.commit("changeNav_Data", false);
      }
    };
    const nav_Show = computed(() => {
      return store.state.nav_Show;
    });
    return {
      ...toRefs(state),
      handelNavLaer,
      nav_Show,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/theme.scss";

.nav_buttom_laer {
  margin-top: 20px;
  .copy {
    height: 60px;
    padding: 0 20px;
    font-size: 16px;
    text-align: center;
    color: $c9;
    a {
      font-size: 16px;
      text-align: center;
      margin: 0 20px;
    }
  }
  .beian {
    text-align: center;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
  }
}
.laer_top {
  margin-top: 240px;
}
.box {
  position: relative;
  z-index: 999;
}
.nav_laer {
  position: absolute;
  left: 0;
  top: 60px;
  right: 0;
  width: 100%;
  height: 0;
  background-color: rgb(53, 56, 84);
  transition: all 0.5s ease-in-out;
  overflow: hidden;
  z-index: 99;
  .nav_laer_warp {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .nav_laer_item {
    height: 36px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    a {
      color: $cf;
    }
  }
}
.nav_laer_show {
  height: 220px;
  box-shadow: 0 3px 4px rgba($color: #000000, $alpha: 0.05);
}
.nav {
  background-color: rgb(53, 56, 84);
  // box-shadow: 0 0px 4px rgba($color: #000000, $alpha: 0.4);
  .nav_warp {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav_item {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    a {
      display: inline-block;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: $cf;
    }
  }
  .btn_warp {
    width: 100%;
    height: 100%;
  }
  .icon_warp {
    display: flex;
    align-items: center;
    justify-content: center;

    .iconfont {
      margin: 0 7px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      color: $cf !important;
      a {
        color: $cf !important;
      }
    }
    .qun {
      position: relative;
    }
    .img::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 82%;
      transform: rotate(180deg);
      width: 0;
      height: 0;
      border-width: 0 10px 10px;
      border-style: solid;
      border-color: transparent transparent $bgfff;
    }
    .qun:hover .img {
      display: block;
    }
    .img {
      display: none;
      position: absolute;
      top: -225px;
      right: -10px;
      // transform: translateX(39%);
      width: 220px;
      height: 220px;
      background-color: $cf;
      box-shadow: 0 0px 4px rgba(0, 0, 0, 0.3);
      background-color: $cf;
      z-index: 999;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .home {
      font-size: 25px;
    }
    .git {
      font-size: 22px;
    }
    .qq {
      font-size: 22px;
    }
  }

  .btn {
    width: 28px;
    height: 28px;
    background-color: $cf;
    border-color: rgb(53, 56, 84);
    .icon {
      color: rgb(53, 56, 84);
      position: relative;
      top: 2px;
      font-size: 22px;
    }
  }
  .img_warp {
    width: 100%;
    height: 100%;
    img {
      padding: 10px;
      width: 160px;
      height: 60px;
      object-fit: cover;
    }
  }
}
.active {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  .nav {
    background-color: $cf;
    .nav_warp {
    }
    .nav_item {
      color: $main-col;
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $main-col;
      }
    }
    .btn_warp {
      width: 100%;
      height: 100%;
    }
    .icon_warp {
      display: flex;
      align-items: center;
      justify-content: center;

      .iconfont {
        color: $main-col !important;
        a {
          color: $main-col !important;
        }
      }
    }

    .btn {
      width: 28px;
      height: 28px;
      background-color: $main-col;
      .icon {
        color: $cf;
        position: relative;
        top: 2px;
        font-size: 22px;
      }
    }
    .img_warp {
      width: 100%;
      height: 100%;
      img {
        padding: 10px;
        width: 160px;
        height: 60px;
        object-fit: cover;
      }
    }
  }
}
</style>
