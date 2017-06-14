<template>
  <section class="contact">
    <app-bubbles></app-bubbles>
    <div class="sunset"></div>
    <div class="contact-content">
      <div class="contact-content-inner  row center-xs col-xs-12">
        <a class="mail" href="mailto:hello@brunerliv.io">hello@brunnerliv.io</a>
        <div class="row col-xs-12 center-xs social">
          <a href="http://codepen.io/BrunnerLivio" class="icon-link" target="_blank">
            <span class="icon icon--codepen"></span>
          </a>
          <a href="https://github.com/BrunnerLivio" class="icon-link" target="_blank">
            <span class="icon icon--github"></span>
          </a>
          <a href="https://twitter.com/brunnerlivio" class="icon-link" target="_blank">
            <span class="icon icon--twitter"></span>
          </a>
        </div>
        <div class="row col-xs-12 center-xs">
          <div class="divider"></div>
        </div>
        <router-link v-bind:to="'impressum'">Impressum</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import Bubbles from '@/components/Bubbles';

export default {
  name: 'contact',
  components: {
    'app-bubbles': Bubbles,
  },
};
</script>

<style scoped lang="scss">
@import '../styles/main';
.contact {
  margin: 0;
  position: relative;
  overflow: hidden;
  background: $primary;
  @include gradient-radial($primary, $primary_dark);
  .sunset {
    content: '';
    width: 100%;
    height: 50%;
    display: block;
    position: absolute;
    top: 0;
    @include gradient-vertical($accent, rgba(255, 255, 255, 0));
    opacity: 0.38;
  }
  &-content {

    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12), 0 5px 5px -3px rgba(0, 0, 0, .2);
    transform-style: preserve-3d;
    background-position: center;
    width: 100%;
    &-inner {
      padding: 180px 0;
    }
  }
}

a:not(.icon-link) {
  text-decoration: none;
  color: white;
  &:before {
    content: '|';
  }
  &:after {
    content: '|';
  }
  &:before,
  &:after {
    position: relative;
    opacity: 0;
    left: 0;
    transition: opacity 0.2s ease-in-out, left 0.2s ease-in-out;
  }
  &.mail {
    @include poly-fluid-sizing('font-size', (576px: 24px, 320px: 20px, 992px: 26px));
  }
  &:hover {
    &:before {
      opacity: 1;
      left: -10px;
    }
    &:after {
      opacity: 1;
      left: 10px;
    }
  }
}

.divider {
  width: 100%;
  height: 2px;
  margin: 25px 10px;
  background: rgba(255, 255, 255, 0.8);
  width: 50%;
  min-width: 200px;
}

.social {
  margin-top: 25px;
}

.icon {
  height: 32px;
  width: 32px;
  margin: 5px 25px;
  display: block;
  background-size: 100% 100%;
  cursor: pointer;
  position: relative;
  transition: transform 0.4s ease-in-out;
  &--codepen {
    background-image: url(../assets/codepen.svg);
  }
  &--github {
    background-image: url(../assets/github.svg);
  }
  &--twitter {
    background-image: url(../assets/twitter.svg);
  }
  &::after {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 100%;
    content: '';
    display: block;
    height: 50px;
    width: 50px;
    position: relative;
    left: -9px;
    top: -9px;
    box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.05), 0 0 0 10px rgba(255, 255, 255, 0.05);
    opacity: 0;
    transform: scale(0.5);
    transition: opacity 0.3s ease-in-out, transform 0.4s ease-in-out;
    z-index: 0;
  }
  &:hover {
    &::after {
      opacity: 1;
      transform: scale(1.0);
    }
    transform: scale(1.1);
  }
  &:active {
    transition: none;
    transform: scale(1.0);
  }
}
</style>
