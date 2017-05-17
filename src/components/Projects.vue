<template>
  <section class="row container center-xs">
    <div class="col-xs-12 col-sm-10 col-md-8 col-lg-8" id="projects">
      <h2>Projects</h2>
      <div class="row center-xs">
        <div class="col-md-8 project" id="tsp-web-project">
          <h3>tsp-web</h3>
          <div>
            <img class="project-preview" src="https://camo.githubusercontent.com/4137446c6f6aca325dd7ed1fbb946dae73087376/687474703a2f2f692e696d6775722e636f6d2f35544c374f65502e6a7067" alt="tsp-web">
          </div>
          <p>
            tsp-web is a visualization of the Debian program
            <a href="http://vicerveza.homeunix.net/~viric/soft/ts/" target="_blank">task-spooler</a>. It runs on NodeJS. For the routing I used ExpressJS. Socket.IO is used for the websocket communication between server and client. One task to accomplish was, to parse the raw output from the tsp-command using regular expressions.
          </p>
        </div>
        <div class="col-md-8 project" id="pogo-api-project">
          <h3>POGO API</h3>
          <div>
            <img class="project-preview" src="https://raw.githubusercontent.com/BrunnerLivio/pokemongo-web-api/master/.github/version_0.1.1.png" alt="POGO API">
          </div>
          <p>
            tsp-web is a visualization of the Debian program
            <a href="http://vicerveza.homeunix.net/~viric/soft/ts/" target="_blank">task-spooler</a>. It runs on NodeJS. For the routing I used ExpressJS. Socket.IO is used for the websocket communication between server and client. One task to accomplish was, to parse the raw output from the tsp-command using regular expressions.
          </p>
        </div>
      </div>
    </div>
    <div id="pogo-api-background" class="project-background"></div>
    <div id="tsp-web-background" class="project-background"></div>
    <div id="projects-background" class="project-background"></div>
  </section>
</template>

<script>
import { addClass, removeClass, offset } from './Utils';

export default {
  name: 'projects',
  methods: {
    update() {
      this.$projectsBackground = this.$el.querySelector('#projects-background');
      this.$tspWeb = this.$el.querySelector('#tsp-web-project');
      this.$tspWebBackground = this.$el.querySelector('#tsp-web-background');
      this.$pogoAPI = this.$el.querySelector('#pogo-api-project');
      const scrollBottom = window.scrollY + (window.innerHeight / 2);

      const tspWebOffsetTop = offset(this.$tspWeb).top;
      const tspWebOffsetCenter =
        tspWebOffsetTop + (this.$tspWeb.clientHeight / 4);

      const pogoAPIOffsetTop = offset(this.$pogoAPI).top;
      const pogoAPIOffsetCenter =
        pogoAPIOffsetTop + (this.$pogoAPI.clientHeight / 4);

      if (scrollBottom > tspWebOffsetCenter) {
        addClass(this.$projectsBackground, 'fade-out');
      } else {
        removeClass(this.$projectsBackground, 'fade-out');
      }
      if (scrollBottom > pogoAPIOffsetCenter) {
        addClass(this.$tspWebBackground, 'fade-out');
      } else {
        removeClass(this.$tspWebBackground, 'fade-out');
      }
    },
  },
  created() {
    window.addEventListener('scroll', () => { this.update(); });
    window.addEventListener('touchmove', () => { this.update(); });
    window.removeEventListener('resize', () => { this.update(); });
  },
  destroyed() {
    window.removeEventListener('scroll', this.update);
    window.removeEventListener('resize', this.update);
    window.removeEventListener('touchmove', this.update);
  },
};
</script>

<style scoped lang="scss">
@import '../styles/main';
$triangle-height: 100px;

.container {
  color: white;
  width: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  top: $triangle-height;
  &::before {
    position: relative;
    top: -$triangle-height;
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 $triangle-height 100vw;
    border-color: white white transparent white;
  }
}

.project {
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-height: 80vh;
  @media #{$break-md} {
    min-height: 90vh;
  }
  p {
    width: 90%;
    a {
      color: white;
      text-decoration: none;
      font-weight: bold;
    }
  }
  &-preview {
    width: 100%;
    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12), 0 5px 5px -3px rgba(0, 0, 0, .2);
  }
}

#projects-background {
  background-color: $primary_dark;
}

#tsp-web-background {
  @include gradient-directional(#5CCB83, #319ECC);
}

#pogo-api-background {
  @include gradient-directional(#D17084, #985F8B);
}

.project-background {
  width: 100vw;
  height: 100vh;
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  transition: opacity 0.5s ease-in-out;
  &.fade-out {
    opacity: 0;
  }
}

h2 {
  color: white;
}

p {
  color: white;
}

h3,
p {
  text-align: center;
}
</style>
