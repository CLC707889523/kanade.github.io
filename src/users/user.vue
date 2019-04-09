<template>
  <div class="header-line">
      <el-row>
        <el-col :span = '24'>这是主页哟</el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name: 'userDetail',
  data () {
    return {
      user: {},
      points: {},
      page: {
        currentPage: 1,
        size: 10,
        total: 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .header-line {
    // background-color: #00a884;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 300;
    text-align: center;
    color: blue;
    margin-top: 21px;
  }
</style>
