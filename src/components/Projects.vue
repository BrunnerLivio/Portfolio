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
          <div class="row center-xs">
            <p>
              tsp-web is a visualization of the Debian program
              <a href="http://vicerveza.homeunix.net/~viric/soft/ts/" target="_blank">task-spooler</a>. It runs on NodeJS. For the routing I used ExpressJS. Socket.IO is used for the websocket communication between server and client. One task to accomplish was, to parse the raw output from the tsp-command using regular expressions.
            </p>
            <a class="glow-button" href="https://github.com/Roche/tsp-web" target="_blank">GITHUB</a>
          </div>
        </div>
        <div class="col-md-8 project" id="pogo-api-project">
          <h3>POGO API</h3>
          <div>
            <img class="project-preview" src="https://raw.githubusercontent.com/BrunnerLivio/pokemongo-web-api/master/.github/version_0.1.1.png" alt="POGO API">
          </div>
          <div class="row center-xs">
            <p>
              POGO API is a RESTful API for Pokemon GO. The whole application is written in TypeScript. ExpressJS handles the routing of the application. Handlebars is used for the static frontend generating. Bundled with Webpack.
            </p>
            <a class="glow-button" href="https://github.com/BrunnerLivio/pokemongo-web-api" target="_blank">GITHUB</a>
          </div>
        </div>
        <div class="col-md-8 project" id="mk-deps-project">
          <h3>mk-deps</h3>
          <div>
            <img class="project-preview" src="../assets/mk-deps.gif" alt="mk-deps">
          </div>
          <div class="row center-xs">
            <p>
              CLI tool which installs the runtime dependencies of debian packages, without installing the package itself. This application is small, but well-rounded with automatic unit tests, MAN-pages and autocompletion. This program is written in Python. The program parses a "debian/control"" file using regular expressions, in order to get its runtime dependencies.
            </p>
            <a class="glow-button" href="https://github.com/Roche/mk-deps" target="_blank">GITHUB</a>
          </div>
        </div>
        <div class="col-md-8 project" id="molior-project">
          <h3>molior</h3>
          <div>
            <img class="project-preview" src="../assets/molior.png" alt="Molior">
          </div>
          <div class="row center-xs">
            <p>
              molior is an automagic debian builder, which pulls git repos if there's a new release (git tag like v0.0.2), builds them and publishes/serves the built debian packages through aptly. My terroritory was mostly in the frontend and backend API. The difficult parts to accomplish in this project were to create an appealing web interface which broke down complex tasks.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div id="molior-background" class="project-background"></div>
    <div id="mk-deps-background" class="project-background"></div>
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
      this.$pogoApiBackground = this.$el.querySelector('#pogo-api-background');
      this.$mkDeps = this.$el.querySelector('#mk-deps-project');
      this.$mkDepsBackground = this.$el.querySelector('#mk-deps-background');
      this.$molior = this.$el.querySelector('#molior-project');
      const scrollBottom = window.scrollY + (window.innerHeight / 2);

      const tspWebOffsetTop = offset(this.$tspWeb).top;
      const pogoAPIOffsetTop = offset(this.$pogoAPI).top;
      const mkDepsOffsetTop = offset(this.$mkDeps).top;
      const moliorOffsetTop = offset(this.$molior).top;

      if (scrollBottom > tspWebOffsetTop) {
        addClass(this.$projectsBackground, 'fade-out');
      } else {
        removeClass(this.$projectsBackground, 'fade-out');
      }
      if (scrollBottom > pogoAPIOffsetTop) {
        addClass(this.$tspWebBackground, 'fade-out');
      } else {
        removeClass(this.$tspWebBackground, 'fade-out');
      }
      if (scrollBottom > mkDepsOffsetTop) {
        addClass(this.$pogoApiBackground, 'fade-out');
      } else {
        removeClass(this.$pogoApiBackground, 'fade-out');
      }
      if (scrollBottom > moliorOffsetTop) {
        addClass(this.$mkDepsBackground, 'fade-out');
      } else {
        removeClass(this.$mkDepsBackground, 'fade-out');
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
  overflow: hidden;
  &::before {
    position: relative;
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

#mk-deps-background {
  @include gradient-directional(#300A24, #3465A4);
}

#molior-background {
  @include gradient-directional(#008CBA, #FFD740);
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
