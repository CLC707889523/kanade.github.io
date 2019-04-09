<template>
  <div>
    这是主页哦
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
</style>
