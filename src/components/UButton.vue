<template>
  <button :class="$style.button">
    <i class="vcfont u-settings"></i>
    <slot></slot>
  </button>
</template>

<style lang="scss" module>
@import "../assets/style/button.scss";

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 78px;
  height: 32px;
  border: 1px solid #dcdfe6;
  background-color: #fff;
  font-size: 14px;
  cursor: pointer;
}
</style>