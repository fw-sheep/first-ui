<template>
  <el-container style="height: 100%">
    <el-header>
      <eheader :status="isCollapse" @spread="spreadAside"></eheader>
    </el-header>
    <el-container style="height: 100%">
      <el-aside :width="getAsideWith" style="text-align: left">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo"
                 :collapse="isCollapse">

          <template v-for="item in items">
            <template v-if="item.subs">
              <el-submenu :index="item.index" :key="item.index">
                <template slot="title">
                  <i :class="item.icon"></i>
                  <span slot="title">{{ item.title }}</span>
                </template>
                <template v-for="subItem in item.subs">
                  <el-submenu
                    v-if="subItem.subs"
                    :index="subItem.index"
                    :key="subItem.index"
                  >
                    <template slot="title">{{ subItem.title }}</template>
                    <el-menu-item
                      v-for="(threeItem,i) in subItem.subs"
                      :key="i"
                      :index="threeItem.index"
                      @click="setBreadcrumb(threeItem,subItem,item)"
                    >{{ threeItem.title }}
                    </el-menu-item>
                  </el-submenu>
                  <el-menu-item
                    v-else
                    :index="subItem.index"
                    :key="subItem.index"
                    @click="setBreadcrumb('',subItem,item)"
                  >{{ subItem.title }}
                  </el-menu-item>
                </template>
              </el-submenu>
            </template>
            <template v-else>
              <el-menu-item :index="item.index" :key="item.index" @click="setBreadcrumb('','',item)">
                <i :class="item.icon"></i>
                <span slot="title">
                  <router-link :to="item.path">{{ item.title }}</router-link>
                </span>
              </el-menu-item>
            </template>
          </template>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <template v-for="breadcrumb in breadcrumbs">
              <el-breadcrumb-item :to="{ path: breadcrumb.path }">{{breadcrumb.name}}</el-breadcrumb-item>
            </template>
            <el-divider></el-divider>
          </el-breadcrumb>
          <el-col :span="24">
            <router-view :key="$route.fullPath"></router-view>
          </el-col>
        </el-main>
        <!--        <el-footer height="40px">Footer</el-footer>-->
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
  import eheader from './header';

  export default {
    components: {
      eheader,
    },
    data() {
      const items = [
        {
          icon: 'el-icon-s-home',
          index: 'dashboard',
          title: '系统首页',
          path: '/user'
        },
        {
          icon: 'el-icon-s-data',
          index: 'table',
          title: '基础表格',
          path: '/role'

        },
        {
          icon: 'el-icon-s-order',
          index: 'tabs',
          title: 'tab选项卡',
          path: '/permiss'
        },
        {
          icon: 'el-icon-date',
          index: '3',
          title: '表单相关',
          subs: [
            {
              index: 'form',
              title: '基本表单'
            },
            {
              index: '3-2',
              title: '三级菜单',
              subs: [
                {
                  index: 'editor',
                  title: '富文本编辑器'
                },
                {
                  index: 'markdown',
                  title: 'markdown编辑器'
                }
              ]
            },
            {
              index: 'upload',
              title: '文件上传'
            }
          ]
        },
        {
          icon: 'el-icon-s-emoji',
          index: 'icon',
          title: '自定义图标',
          path: '/user'
        },
        {
          icon: 'el-icon-pie-chart',
          index: 'charts',
          title: 'schart图表',
          path: '/user'
        },
        {
          icon: 'el-icon-rank',
          index: '6',
          title: '拖拽组件',
          subs: [
            {
              index: 'drag',
              title: '拖拽列表'
            },
            {
              index: 'dialog',
              title: '拖拽弹框'
            }
          ]
        },
      ];
      const breadcrumbs = [
        {
          index: 0,
          path: '/home',
          name: '首页',
        },
        {
          index: 1,
          path: '/user',
          name: '用户管理',
        },
      ];
      return {
        items: items,
        breadcrumbs: breadcrumbs,
        isCollapse: false,
        // tableData: Array(50).fill(item)
      }
    },
    computed: {
      getAsideWith() {
        return this.wt + "px";
      }
    },
    methods: {
      spreadAside(a) {
        this.isCollapse = !this.isCollapse
        // this.wt = this.isCollapse ? 65 : 200
      },
      setBreadcrumb(itemGrad, itemParent, item) {
        console.log(item)
        this.breadcrumbs = [];
        this.breadcrumbs.push({
          index: 0,
          path: '/home',
          name: '首页',
        },)
        this.breadcrumbs.push({
          index: 0,
          path: item.path,
          name: item.title,
        },)
        if (itemParent != '') {
          this.breadcrumbs.push({
            index: 0,
            path: itemParent.path,
            name: itemParent.title,
          },)
        }
        if (itemGrad != '') {
          this.breadcrumbs.push({
            index: 0,
            path: itemGrad.path,
            name: itemGrad.title,
          },)
        }
      },
    }
  };
</script>
<style>
  .el-header {
    background-color: #25acd0;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-footer {
    background-color: #6f6f6f;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #FFFFFF;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
