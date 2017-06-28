<template>
  <div class="col-xs-12 col-xs-offset-0 col-md-10 col-md-offset-1 middle-xs center-xs">
    <div class="project-preview">
      <div class="project-preview-container">
        <div class="project-preview-container-left-shadow"></div>
        <slot></slot>
        <div class="project-preview-container-right-shadow"></div>
      </div>
      <div class="project-preview-shadow"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'project-preview',
};
</script>
<style scoped lang="scss">
@import '../styles/main';
.project-preview {
  position: relative;
  opacity: 0;
  transition: 0.5s ease-in-out opacity;
  &-shadow {
    width: 100%;
    height: 30px;
    position: absolute;
    bottom: 6px;
    z-index: 0;
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
    @include gradient-vertical(rgba(255, 255, 255, 0.001), rgba(215, 223, 232, 1));
  }
  img {
    width: calc(100% - 90px);
    position: relative;
    z-index: 9;
    max-width: 100%;
    max-height: 100%;
    height: auto;
    bottom: 4px;
    @media #{$break-md} {
      width: calc(100% - 280px);
    }
  }
  &-container {
    display: block;
    position: relative;
    height: 100%;
    &-left-shadow,
    &-right-shadow {
      width: 20px;
      @media #{$break-md} {
        width: 150px;
      }
      height: 100%;
      position: absolute;
      top: 0;
      z-index: 2;
    }
    &-left-shadow {
      left: 0;
    }
    &-right-shadow {
      right: 0;
    }
  }
}
</style>
