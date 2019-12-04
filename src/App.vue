<template>
  <div class="app">
    <div class="buttons">
      <div class="button-group">
        <h3>普通按钮</h3>
        <div class="button-group-content">
          <u-button>默认</u-button>
          <u-button type="primary">主要</u-button>
          <u-button type="info">信息</u-button>
          <u-button type="warn">警告</u-button>
          <u-button type="danger">危险</u-button>
        </div>
      </div>
      <div class="button-group">
        <h3>图标按钮</h3>
        <div class="button-group-content">
          <u-button icon="loading">Loading</u-button>
          <u-button icon="like">Like</u-button>
          <u-button icon="loading" />
          <u-button icon="like" />
        </div>
      </div>
      <div class="button-group">
        <h3>图标形状</h3>
        <div class="button-group-content">
          <u-button type="primary">方形</u-button>
          <u-button type="primary" :circle="true">圆形</u-button>
        </div>
      </div>
      <div class="button-group">
        <h3>禁用状态</h3>
        <div class="button-group-content">
          <u-button :disabled="true" type="primary">主要</u-button>
          <u-button :disabled="true" type="info">信息</u-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UButton from '@/components/UButton.vue'

export default {
  components: {
    UButton
  }
}
</script>
