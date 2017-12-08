<!-- <template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
 -->
<template>
  <div id="app">
    <!--<img src="./assets/logo.png">
    <router-view></router-view>-->
    <main>
      <!-- 左侧导航 -->
      <div class="main-left">
        <el-menu default-active="/clients/orders" class="el-menu-vertical-demo" :router="true">
          <el-submenu index="1">
            <template slot="title"><i class="fa fa-info"></i>  客户信息</template>
            <el-menu-item index="/clients/orders" :class="{'isActive': !active}"><!-- <i class="el-icon-plus"> </i>-->预约信息</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="fa fa-clipboard"></i>  体检报告</template>
            <el-menu-item index="/reports/manual/add" :class="{'isActive': !active}"><!-- <i class="el-icon-plus"></i> -->手工录入</el-menu-item>
            <el-menu-item index="/reports/reportlist" :class="{'isActive': !active}"><!-- <i class="el-icon-plus"></i> -->报告列表</el-menu-item>
          </el-submenu>
         <!-- <el-menu-item index="/family" :class="{'isActive': !active}">一家人</el-menu-item>-->
        </el-menu>
      </div>

      <!-- 右侧主内容区 -->
      <div class="main-right" >
        <transition name="fade">
          <router-view class="view"></router-view>
        </transition>
      </div>
    </main>
  </div>
</template>

<script>
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Element)

export default {
  name: 'app',
  data: function(){
    return {
      active:true,
    }
  },
  created: function(){
      this.$router.push('/clients/orders');
  },
  // watch: {
  //    '$route': function (to,from) {
  //        if(to.path == '/activePublic'){
  //            this.active = true ;
  //        }else if(to.path == '/activeManage'){
  //            this.active = false ;
  //        }
  //    }
  // }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/

body{margin: 0;}
#app {
  min-width: 1200px;
  margin: 0 auto;
  font-family: "Helvetica Neue","PingFang SC",Arial,sans-serif;
}
/* 头部导航 */
header{z-index: 1000;min-width: 1200px;transition: all 0.5s ease;  border-top: solid 4px #3091F2;  background-color: #fff;  box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);  }
header.header-fixed{position: fixed;top: 0;left: 0;right: 0;}
header .el-menu-demo{padding-left: 300px!important;}

/* 主内容区 */
main{display: -webkit-box;display: -ms-flexbox;display: flex;  min-height: 800px;  border: solid 40px #E9ECF1;  background-color: #FCFCFC;  }
main .main-left{text-align: center;-webkit-box-flex: 0;-ms-flex: 0 0 200px;flex: 0 0 200px;}
main .main-right{-webkit-box-flex:1;-ms-flex:1;flex:1; background-color: #fff; padding: 50px 70px; }
main .el-menu{background-color: transparent!important;}
/*  */
.router-link{display:inline-block;width:100%;height:100%;text-align:center;color:#475669;text-decoration: none; }
.is-active .router-link{color:#20a0ff; }

/* 单选框 */
  .el-form-item .el-radio+.el-radio {
    margin-left: 30px!important;
  }
  /* 路由切换动效 */
  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }

  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-active {
    opacity: 0;
    transform: translateY(30px);
  }

/* 导航栏菜单选中效果 */
  .isActive{color: #20a0ff!important;}
   #app main .aside .is-active{color: #475669;}

  /* 卡片 */
  .el-card{overflow: visible!important;}
</style>

