<template>
  <div>
    <div id = "app">
      <h4>Welcome to kanade's blog!</h4>
    </div>
    <el-row id = "infomation">
      <el-col :span="24">这个项目采用了Vue+ElementUI+Express+Node+Webpack+mongoose</el-col>
      <el-col :span="24">另外还有jsonwebtoken+bcrypt的跨域用户信息服务器验证</el-col>
    </el-row>
    <el-row id = "button-center" >
      <el-button @click="clickButton()" type = "success">点我</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'App',

  methods: {
    clickButton () {
      console.log('触发成功')
    }
  }
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

#infomation {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: blue;
  margin-top: 120px;
}

#button-center {
  text-align: center;
  margin: 120px 0px
}
</style>
