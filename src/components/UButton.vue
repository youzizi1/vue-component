<template>
  <button :class="getType" :disabled="disabled">
    <i class="vcfont" v-if="icon" :class="getIcon"></i>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      validator: val => {
        const icons = ['loading', 'like']
        return icons.includes(val)
      }
    },
    circle: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getType () {
      return [`${this.$style.button}`, `${this.$style[this.type]}`, this.circle && this.$style.circle]
    },
    getIcon () {
      if (this.icon === 'loading') {
        return [`u-${this.icon}`, `${this.$style.loading}`]
      }
      return `u-${this.icon}`
    }
  }
}
</script>

<style lang="scss" module>
@import url("//at.alicdn.com/t/font_1543086_ogx537c21t.css");

.button {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 78px;
  height: 32px;
  border: 1px solid #ebedf0;
  outline: none;
  background-color: #fff;
  font-size: 14px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    color: #000;
  }

  &:active::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #ccc;
    opacity: 0.2;
  }

  &.primary {
    background-color: #07c160;
    border: 1px solid #07c160;
  }

  &.warn {
    background-color: #ff976a;
    border: 1px solid #ff976a;
  }

  &.danger {
    background-color: #ee0a24;
    border: 1px solid #ee0a24;
  }

  &.info {
    background-color: #1989fa;
    border: 1px solid #1989fa;
  }

  &.circle {
    border-radius: 4px;
  }

  .loading {
    font-size: 20px;
    animation: loading 1.2s infinite linear;
  }

  @keyframes loading {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
