<template>
  <div>
    <herder></herder>
    <my-titel title="捐赠名单">
      <template #content>
        <a-row type="flex" align="middle" justify="center" class="conntent">
          <a-col
            :xs="{ span: 1 }"
            :sm="{ span: 1 }"
            :lg="{ span: 1 }"
            :md="{ span: 1 }"
            :xl="{ span: 1 }"
            :xxl="{ span: 1 }"
            class="titel"
          ></a-col
          ><a-col
            :xs="{ span: 4 }"
            :sm="{ span: 4 }"
            :lg="{ span: 4 }"
            :md="{ span: 4 }"
            :xl="{ span: 4 }"
            :xxl="{ span: 4 }"
            class="titel"
            >昵称</a-col
          >
          <a-col
            :xs="{ span: 4 }"
            :sm="{ span: 4 }"
            :lg="{ span: 4 }"
            :md="{ span: 4 }"
            :xl="{ span: 4 }"
            :xxl="{ span: 4 }"
            class="titel"
            >捐赠方式</a-col
          >
          <a-col
            :xs="{ span: 4 }"
            :sm="{ span: 4 }"
            :lg="{ span: 4 }"
            :md="{ span: 4 }"
            :xl="{ span: 4 }"
            :xxl="{ span: 4 }"
            class="titel"
            >金额</a-col
          >
          <a-col
            :xs="{ span: 4 }"
            :sm="{ span: 4 }"
            :lg="{ span: 4 }"
            :md="{ span: 4 }"
            :xl="{ span: 4 }"
            :xxl="{ span: 4 }"
            class="titel"
            >留言</a-col
          >
          <a-col
            :xs="{ span: 6 }"
            :sm="{ span: 6 }"
            :lg="{ span: 6 }"
            :md="{ span: 6 }"
            :xl="{ span: 6 }"
            :xxl="{ span: 6 }"
            class="titel"
            ><p>捐赠时间</p>
            <div class="icons">
              <UpOutlined class="icon" @click="chanheIndex(7)" /><DownOutlined
                @click="chanheIndex(8)"
                class="icon"
              /></div
          ></a-col>
          <a-col
            :xs="{ span: 1 }"
            :sm="{ span: 1 }"
            :lg="{ span: 1 }"
            :md="{ span: 1 }"
            :xl="{ span: 1 }"
            :xxl="{ span: 1 }"
            class="titel"
          ></a-col
        ></a-row>
        <a-row
          type="flex"
          align="middle"
          justify="center"
          class="mideil"
          v-for="(item, index) in order_Data"
          :key="index + 'mideil'"
        >
          <a-col
            :xs="{ span: 1 }"
            :sm="{ span: 1 }"
            :lg="{ span: 1 }"
            :md="{ span: 1 }"
            :xl="{ span: 1 }"
            :xxl="{ span: 1 }"
          ></a-col
          ><a-col
            :xs="{ span: 4 }"
            :sm="{ span: 4 }"
            :lg="{ span: 4 }"
            :md="{ span: 4 }"
            :xl="{ span: 4 }"
            :xxl="{ span: 4 }"
            class="mideil_item desc"
            :class="{ border_no: index === order_Data.length - 1 }"
            >{{ item.name }}</a-col
          >
          <a-col
            :xs="{ span: 4 }"
            :sm="{ span: 4 }"
            :lg="{ span: 4 }"
            :md="{ span: 4 }"
            :xl="{ span: 4 }"
            :xxl="{ span: 4 }"
            class="mideil_item desc"
            :class="{ border_no: index === order_Data.length - 1 }"
            >{{ item.payType }}</a-col
          >
          <a-col
            :xs="{ span: 4 }"
            :sm="{ span: 4 }"
            :lg="{ span: 4 }"
            :md="{ span: 4 }"
            :xl="{ span: 4 }"
            :xxl="{ span: 4 }"
            class="mideil_item desc"
            :class="{ border_no: index === order_Data.length - 1 }"
            >{{ Number(item.pirce).toFixed(2) }}</a-col
          >
          <a-col
            :xs="{ span: 4 }"
            :sm="{ span: 4 }"
            :lg="{ span: 4 }"
            :md="{ span: 4 }"
            :xl="{ span: 4 }"
            :xxl="{ span: 4 }"
            class="mideil_item desc"
            :class="{ border_no: index === order_Data.length - 1 }"
            >{{ item.mesg }}</a-col
          >
          <a-col
            :xs="{ span: 6 }"
            :sm="{ span: 6 }"
            :lg="{ span: 6 }"
            :md="{ span: 6 }"
            :xl="{ span: 6 }"
            :xxl="{ span: 6 }"
            :class="{ border_no: index === order_Data.length - 1 }"
            class="mideil_item desc"
            >{{ item.play_time }}</a-col
          >
          <a-col
            :xs="{ span: 1 }"
            :sm="{ span: 1 }"
            :lg="{ span: 1 }"
            :md="{ span: 1 }"
            :xl="{ span: 1 }"
            :xxl="{ span: 1 }"
            class="mideil_item"
          ></a-col
        ></a-row>
        <a-row type="flex" align="middle" justify="center" class="buttom">
          <a-col
            :xs="{ span: 1 }"
            :sm="{ span: 1 }"
            :lg="{ span: 1 }"
            :md="{ span: 1 }"
            :xl="{ span: 1 }"
            :xxl="{ span: 1 }"
          ></a-col>
          <a-col
            :xs="{ span: 22 }"
            :sm="{ span: 22 }"
            :lg="{ span: 14, offset: 8 }"
            :md="{ span: 14, offset: 8 }"
            :xl="{ span: 12, offset: 10 }"
            :xxl="{ span: 12, offset: 10 }"
            class="page_warp"
            ><a-config-provider :locale="locale">
              <a-pagination
                size="small"
                :total="total"
                v-model:current="page"
                v-model:pageSize="size"
                :defaultPageSize="10"
                :pageSizeOptions="['10', '30', '60']"
                show-size-changer
                show-quick-jumper
                @change="pageChane"
                @showSizeChange="sizeChange"
              /> </a-config-provider
          ></a-col>
          <a-col
            :xs="{ span: 1 }"
            :sm="{ span: 1 }"
            :lg="{ span: 1 }"
            :md="{ span: 1 }"
            :xl="{ span: 1 }"
            :xxl="{ span: 1 }"
          ></a-col
        ></a-row> </template
    ></my-titel>
  </div>
  <Buttom></Buttom>
</template>

<script>
import { reactive, toRefs, getCurrentInstance, onMounted } from "vue";
import Herder from "@/components/herder/index.vue";
import MyTitel from "@/components/my_titel/index.vue";
import Buttom from "@/components/buttom/index.vue";
import { UpOutlined, DownOutlined } from "@ant-design/icons-vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";
export default {
  components: { Herder, MyTitel, Buttom, UpOutlined, DownOutlined },
  data() {
    return {
      locale: zhCN,
    };
  },
  setup() {
    const { proxy } = getCurrentInstance();
    const state = reactive({
      order_Data: [],
      page: 1,
      size: 10,
      index: 7,
      total: 0,
    });
    onMounted(() => {
      initData();
    });
    const initData = async () => {
      const res = await proxy.$http.post("/api/Donation", {
        page: state.page,
        size: state.size,
        index: state.index,
      });
      if (res.data.success === true) {
        state.order_Data = res.data.data;
        state.total = res.data.total;
      } else {
        message.error("获取数据失败即将返回上一页");
      }
    };
    const chanheIndex = (idx) => {
      state.index = idx;
      initData();
    };
    //页数发生变化
    const pageChane = () => {
      initData();
    };
    //条数发生变化
    const sizeChange = () => {
      initData();
    };
    return {
      ...toRefs(state),
      chanheIndex,
      pageChane,
      sizeChange,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/theme.scss";
.buttom {
  width: 100%;
  height: 50px;
  font-weight: bold;
  border-top: 1px solid $xt;
  .page_warp {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.mideil {
  width: 100%;
  min-height: 70px;
  font-weight: bold;
  .desc {
    border-bottom: 1px solid $xt;
  }
  .border_no {
    border-bottom: none;
  }
  .mideil_item {
    width: 100%;
    height: 100%;
    padding: 5px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    border-left: 1px solid $xt;
  }
}

.conntent {
  width: 100%;
  height: 50px;
  font-weight: bold;
  .titel + .titel {
    border-left: 1px solid $xt;
  }
  .titel {
    width: 100%;
    height: 100%;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom: 1px solid $xt;
    .icons {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin: 0 5px;
      .icon {
        font-size: 12px;
      }
    }
  }
}
</style>
