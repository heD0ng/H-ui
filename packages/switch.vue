<template>
  <label
    class="hm-switch"
    @click="handleClick"
    :class="{isChecked: value}"
  >
    <span class="hm-switch-core">
      <span class="hm-switch-button"></span>
    </span>
  </label>
</template>
<script>
export default {
  name: 'HmSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick () {
      this.$emit('input', !this.value)
    }
  }
}
</script>
<style lang='scss' scoped>
.hm-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .hm-switch-core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .hm-switch-button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
.hm-switch.isChecked {
  .hm-switch-core {
    border-color: #409eff;
    background-color: #409eff;
    .hm-switch-button {
      transform: translateX(20px);
    }
  }
}
</style>
