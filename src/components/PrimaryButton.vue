<template>
  <a class="primary-button">
    <div class="primary-button-content">
      <slot></slot>
    </div>
  </a>
</template>

<script>
import Bubbles from '@/components/Bubbles';

export default {
  name: 'primary-button',
  components: {
    'app-bubbles': Bubbles,
  },
};
</script>

<style scoped lang="scss">
@import '../styles/main';
.primary-button {
  margin: 0;
  position: relative;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.25);
  min-width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  text-transform: uppercase;
  margin: 5px;
  transition: background-color 0.5s ease-in-out;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  &:hover {
    background: rgba(0, 0, 0, 0.4);
  }
  &-content {
    z-index: 2;
    position: relative;
  }
}
</style>
