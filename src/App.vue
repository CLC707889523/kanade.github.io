<template>
  <div>
    <router-view></router-view>
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
