<template>
  <div class="hm-button" :class="[`hm-button--${type}`]">
    <span>
      <slot />
    </span>
  </div>
</template>
<script>
export default {
  name: 'HmButton',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>
<style lang="scss" scoped>
.hm-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500; // 禁止元素的文字被选虫
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #2382e2;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.hm-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}
.hm-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    border-color: #85ce61;
    color: #ffffff;
  }
}
</style>
