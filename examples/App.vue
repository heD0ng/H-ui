<template>
  <div id="app">
    <div>
      普通按钮：<hm-button>按钮</hm-button>
    </div>
    <div>
      primary按钮：<hm-button type='primary'>primary</hm-button>
    </div>
    <div>
      success按钮：<hm-button type='success'>success</hm-button>
    </div>
    <div>
      普通输入框：<hm-input placeholder="请输入内容" v-model="username"></hm-input>
    </div>
    <div>
      密码输入框：<hm-input placeholder="请输入内容" type= 'password'></hm-input>
    </div>
    <div>
      禁用输入框：<hm-input placeholder="请输入内容" disabled></hm-input>
    </div>
    <div>
      <hm-switch v-model="active"></hm-switch>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      username: '',
      active: false
    }
  }
}
</script>

<style lang="scss">
  #app{
    div {
      margin: 5px 0px 5px 20px;
    }
    .hm-input {
      width: 200px;
    }
  }
</style>
