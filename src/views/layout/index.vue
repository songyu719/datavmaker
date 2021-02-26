<template>
  <a-layout id="layout">
    <a-layout-header class="header">
      <div class="logo">
        <img src="" alt />
        <p>医疗数据上报系统</p>
      </div>
      <div class="headerRight">
        <span>icon</span>
        <img :src="require('@/assets/img/quit.png')" alt="">
      </div>

    </a-layout-header>
    <a-layout class="layout_con">
      <a-layout-sider>
        <a-menu
            theme="dark"
            mode="inline"
            :defaultOpenKeys="defaultOpenKeys"
            :selectedKeys="[$route.path]"
            @click="menuClick"
        >
          <template v-for="item in router.children">
            <template v-if="!item.hidden">
              <a-menu-item
                  v-if="checkChildren(item)"
                  :key="item.path"
                  :class="{
                  'ant-menu-item-selected':
                    $route.path === item.redirect ||
                    $route.meta.parent === item.name
                }"
              >
                <i :class="'layout_icon iconfont ' + item.meta.icon"></i>
                <span>{{ item.meta.title }}</span>
              </a-menu-item>

              <a-sub-menu v-else :key="item.path">
                <span slot="title">
                  <i :class="'layout_icon iconfont ' + item.meta.icon"></i>
                  <span>{{ item.meta.title }}</span>
                </span>
                <template v-for="citem in item.children" :key="citem.path">
                  <a-menu-item >
                    <span>{{ citem.meta.title }}</span>
                  </a-menu-item>
                </template>
              </a-sub-menu>
            </template>
          </template>
        </a-menu>
      </a-layout-sider>
      <div class="layout_content">
        <a-layout-content class="container">
          <router-view/>
        </a-layout-content>
      </div>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, reactive,toRefs,onMounted } from "vue";
import { pageRouter } from "@/router";

export default defineComponent({
  setup() {
    const state = reactive({
      defaultOpenKeys: "",
      pageRouter: pageRouter,
      router: {}
    });

    onMounted(()=>{
      console.log(state.pageRouter);
    })

    function menuClick() {
      // todo
    }

    function checkChildren() {
      // todo
    }

    return { ...toRefs(state), menuClick, checkChildren }
  }
});
</script>

<style lang="less" scoped>
#layout .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#layout .trigger:hover {
  color: #1890ff;
}

#layout {
  height: 100%;
  display: block;

  .layout_con {
    height: calc(100% - 48px);
  }

  .ant-layout-sider {
    width: 208px !important;
    max-width: 208px !important;
    min-width: 208px !important;
  }

  .ant-menu {
    overflow-y: auto;
    height: 100%;
    background: #001529;
    box-shadow: 2px 0px 6px rgba(0, 21, 41, 0.35);

    .ant-menu-item {
      text-overflow: clip;
    }
  }

  // .ant-menu.ant-menu-dark .ant-menu-item-selected,
  // .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
  //   background: linear-gradient(90deg, #1890ff 0%, #144884 100%);
  // }
}

.header {
  height: 48px;
  background: #fff;
  box-shadow: 0px 1px 4px rgba(0, 21, 41, 0.12);
  padding: 12px 40px 12px 20px;
  display: flex;
  justify-content: space-between;
  line-height: 26px;
  color: #2c393d;

  .logo {
    display: flex;
    color: #262626;

    img {
      width: 24px;
      height: 24px;
      margin-right: 5px;
    }

    p {
      font-size: 14px;
      font-weight: bold;
      line-height: 28px;
      letter-spacing: 2px;
    }
  }

  .headerRight {
    display: flex;
    align-items: center;
    color: #cde4ff;

    img {
      display: block;
      width: 24px;
      height: 24px;
    }

    span {
      margin-right: 30px;
      color: #595959;
    }

    .iconfont {
      color: #888;
      cursor: pointer;
    }
  }
}

.layout_content {
  flex: 1;

  .nav {
    height: 80px;
    padding: 16px 32px 0;

    h2 {
      font-size: 20px;
      font-weight: bold;
      margin: 16px 0 0 0;
    }
  }

  .container {
    height: 100%;
    padding: 0 24px;

    &.container_100 {
      padding: 0;
      height: 100%;
    }
  }
}

.layout_icon {
  margin-right: 12px;
}
</style>
