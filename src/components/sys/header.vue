<template>
  <div height="60px" style="font-size: 12px">
    <div style="float: left;font-size: 22px">
      <i v-if="status" @click="doSpread" class="el-icon-s-fold"></i>
      <i v-else @click="doSpread" class="el-icon-s-unfold"></i>
      <span><strong>后台管理系统</strong></span>
    </div>
    <div style="float: right;height: 100%;width: 180px">
      <el-dropdown :hide-on-click="false" style="float: right">
        <span class="el-dropdown-link" style="color: #333333">
          个人管理<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item>信息修改</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-avatar :size="46" fit="fill"
                 src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                 style="float: right;margin-top: 6px"></el-avatar>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        spread: true
      }
    },
    props: {
      status,
    },
    computed: {},
    methods: {
      doSpread() {
        this.spread = !this.spread;
        this.$emit('spread', this.status)
      }
    }
  };
</script>
