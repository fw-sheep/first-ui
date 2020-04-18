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
                    >{{ threeItem.title }}
                    </el-menu-item>
                  </el-submenu>
                  <el-menu-item
                    v-else
                    :index="subItem.index"
                    :key="subItem.index"
                  >{{ subItem.title }}
                  </el-menu-item>
                </template>
              </el-submenu>
            </template>
            <template v-else>
              <el-menu-item :index="item.index" :key="item.index">
                <i :class="item.icon"></i>
                <span slot="title">{{ item.title }}</span>
              </el-menu-item>
            </template>
          </template>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          </el-breadcrumb>
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
          title: '系统首页'
        },
        {
          icon: 'el-icon-s-data',
          index: 'table',
          title: '基础表格'
        },
        {
          icon: 'el-icon-s-order',
          index: 'tabs',
          title: 'tab选项卡'
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
          title: '自定义图标'
        },
        {
          icon: 'el-icon-pie-chart',
          index: 'charts',
          title: 'schart图表'
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
      return {
        items: items,
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
      }
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
