<template>
  <section class="contact row center-xs">
    <div class="col-xs-12 col-sm-10 col-md-8 col-lg-8 column center-xs">
      <h2>Contact</h2>
      <div class="contact-content">
        <a class="mail" href="mailto:hello@brunerliv.io">hello@brunnerliv.io</a>
        <div class="row center-xs social">
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
        <div class="row center-xs">
          <div class="divider"></div>
        </div>
        <router-link v-bind:to="'impressum'">Impressum</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'contact',
};
</script>

<style scoped lang="scss">
@import '../styles/main';
.contact {
  background: $primary;
  margin: 0;
  &-content {
    margin-top: 250px;
    margin-bottom: 250px;
  }
  h2 {
    color: white;
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
  background: white;
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
