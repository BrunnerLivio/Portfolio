<template>
  <section>
    <div class="triangle-left"></div>
    <div class="triangle-right"></div>
    <h2 class="title"></h2>
    <div class="project-wrapper row container center-xs">
      <div class="col-xs-12 col-sm-10 col-md-10 col-lg-10" id="projects">
        <div class="row center-xs">
          <div class="col-md-10 project active" id="tsp-web-project">
            <h3>tsp-web</h3>
            <div class="row">
              <div class="col-md-6 col-xs-12 first-xs last-md">
                <picture class="project-preview">
                  <source media="(min-width: 1300px)" srcset="/static/projects/tsp-web/tsp-web_1500x.jpg">
                  <source media="(min-width: 1000px)" srcset="/static/projects/tsp-web/tsp-web_1200x.jpg">
                  <source media="(min-width: 570px)" srcset="/static/projects/tsp-web/tsp-web_770x.jpg">
                  <source media="(min-width: 200px)" srcset="/static/projects/tsp-web/tsp-web_400x.jpg">
                  <img src="/static/projects/tsp-web/tsp-web_original.jpg" alt="tsp-web">
                </picture>
              </div>
              <div class="col-md-6 col-xs-12 last-xs first-md">
                <p>
                  tsp-web is a visualization of the Debian program
                  <a href="http://vicerveza.homeunix.net/~viric/soft/ts/" target="_blank">task-spooler</a>. It runs on NodeJS. Technologies like ExpressJS or Socket.IO were used in this project. One task to accomplish was parsing the raw output from the tsp-command using regular expressions.
                </p>
                <div class="row center-xs start-md">
                  <a class="glow-button" href="https://github.com/Roche/tsp-web" target="_blank">GITHUB</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-10 project" id="pogo-api-project">
            <h3>POGO API</h3>
            <div class="row">
              <div class="col-md-6 col-xs-12 last-xs">
                <p>
                  POGO API is a RESTful API for Pokemon GO. The whole application is written in TypeScript. Handlebars is used for the static frontend. This API is split in 3 projects. The
                  <a href="https://github.com/BrunnerLivio/pokemongo-web-api" target="_blank">API istelf</a>,
                  <a href="https://github.com/BrunnerLivio/pokemongo-game-master" target="_blank">pokemongo-game-master</a> which is raw PokemonGO data and
                  <a href="https://github.com/BrunnerLivio/pokemongo-json-pokedex" target="_blank">pokemongo-json-pokedex</a> which transforms the raw data into better processable JSON information.
                </p>
                <div class="row center-xs start-md">
                  <a class="glow-button" href="https://github.com/BrunnerLivio/pokemongo-web-api" target="_blank">GITHUB</a>
                </div>
              </div>
              <div class="col-md-6 col-xs-12 first-xs">
                <picture class="project-preview">
                  <source media="(min-width: 1300px)" srcset="/static/projects/pogoapi/pogoapi_1500x.jpg">
                  <source media="(min-width: 1000px)" srcset="/static/projects/pogoapi/pogoapi_1200x.jpg">
                  <source media="(min-width: 570px)" srcset="/static/projects/pogoapi/pogoapi_770x.jpg">
                  <source media="(min-width: 200px)" srcset="/static/projects/pogoapi/pogoapi_400x.jpg">
                  <img src="/static/projects/pogoapi/pogoapi_original.jpg" alt="POGO API">
                </picture>
              </div>
            </div>
          </div>
          <div class="col-md-10 project" id="molior-project">
            <h3>molior</h3>
            <div class="row">
              <div class="col-md-6 col-xs-12 last-xs first-md">
                <p>
                  molior is an
                  <i>automagic</i> debian builder, which builds git repos if there's a new release (git tag like v0.0.2), builds them and publishes/serves the built debian packages through aptly. My terroritory was mostly in the frontend and backend API. The difficult parts to accomplish in this project were to create an appealing web interface which broke down complex tasks.
                </p>
              </div>
              <div class="col-md-6 col-xs-12 first-xs last-md">
                <picture class="project-preview">
                  <source media="(min-width: 1300px)" srcset="/static/projects/molior/molior_1500x.jpg">
                  <source media="(min-width: 1000px)" srcset="/static/projects/molior/molior_1200x.jpg">
                  <source media="(min-width: 570px)" srcset="/static/projects/molior/molior_770x.jpg">
                  <source media="(min-width: 200px)" srcset="/static/projects/molior/molior_400x.jpg">
                  <img src="/static/projects/molior/molior_original.jpg" alt="Molior">
                </picture>
              </div>
            </div>
          </div>
          <div class="col-md-10 project" id="mk-deps-project">
            <h3>mk-deps</h3>
            <div class="row">
              <div class="col-md-6 col-xs-12 first-xs">
                <img class="project-preview" src="../assets/mk-deps.gif" alt="mk-deps">
              </div>
              <div class="col-md-6 col-xs-12 last-xs">
                <p>
                  CLI tool which installs the runtime dependencies of debian packages, without installing the package itself. This application is small, but well-rounded with automatic unit tests, MAN-pages and autocompletion. It is written in Python. The program parses a "debian/control" file using regular expressions, in order to get its runtime dependencies.
                </p>
                <div class="row center-xs start-md">
                  <a class="glow-button" href="https://github.com/Roche/mk-deps" target="_blank">GITHUB</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="mk-deps-background" class="project-background"></div>
    <div id="molior-background" class="project-background"></div>
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
      this.$moliorBackground = this.$el.querySelector('#molior-background');

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
        addClass(this.$pogoAPI, 'active');
      } else {
        removeClass(this.$tspWebBackground, 'fade-out');
      }
      if (scrollBottom > moliorOffsetTop) {
        addClass(this.$pogoApiBackground, 'fade-out');
        addClass(this.$molior, 'active');
      } else {
        removeClass(this.$pogoApiBackground, 'fade-out');
      }
      if (scrollBottom > mkDepsOffsetTop) {
        addClass(this.$moliorBackground, 'fade-out');
        addClass(this.$mkDeps, 'active');
      } else {
        removeClass(this.$moliorBackground, 'fade-out');
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
$shadow-background: darken($light-background, 5);
$shadow-content-background: darken($light-background, 2);
$content-margin-md: 100;
$content-margin-xs: 40;
$shadow-height-md: 50;
$shadow-height-xs: 40;

section {
  position: relative;
}

.triangle-left {
  left: 0;
  border-width: 0 $content-margin-xs / 2 + px $shadow-height-xs + px 0;
  border-color: transparent $shadow-background transparent transparent;
  @media #{$break-md} {
    border-width: 0 $content-margin-md / 2 + px $shadow-height-md + px 0;
  }
}

.triangle-right {
  right: 0;
  border-width: $shadow-height-xs + px $content-margin-xs / 2 + px 0 0;
  border-color: $shadow-background transparent transparent transparent;
  @media #{$break-md} {
    border-width: $shadow-height-md + px $content-margin-md / 2 + px 0 0;
  }
}

.triangle-left,
.triangle-right {
  top: 0;
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
}

.container {
  color: white;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.title {
  color: $body-text-color;
  background-color: $shadow-background;
  margin: 0;
  height: $shadow-height-xs + px;
  width: calc(100% - #{$content-margin-xs + px});
  margin-left: $content-margin-xs / 2 + px;
  @media #{$break-md} {
    height: $shadow-height-md + px;
    width: calc(100% - #{$content-margin-md + px});
    margin-left: $content-margin-md / 2 + px;
  }
}

.project-wrapper {
  margin: 0;
  background: $shadow-content-background;
  width: calc(100% - #{$content-margin-xs + px});
  margin-left: $content-margin-xs / 2 + px;
  @media #{$break-md} {
    width: calc(100% - #{$content-margin-md + px});
    margin-left: $content-margin-md / 2 + px;
  }
}

.project {
  display: flex;
  flex-direction: column;
  padding: 20px;
  transition: opacity 1s ease-in-out,
  top 1s ease-in-out;
  opacity: 0;
  position: relative;
  top: 30px;
  @media #{$break-md} {
    min-height: 80vh;
  }
  &:first-child {
    padding-top: 50px;
    h3 {
      margin-top: 0;
    }
  }
  &.active {
    opacity: 1;
    top: 0;
  }
  &-preview {
    width: 100%;
    img {
      margin: 20px 0;
      box-shadow: 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12), 0 5px 5px -3px rgba(0, 0, 0, .2);
    }
  }
  picture img {
    max-width: 100%;
    max-height: 100%;
    height: auto;
  }
  .glow-button {
    margin-left: 1rem;
  }
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

p {
  color: $body-text-color;
  text-align: center;
  margin-top: 15px;

  @media #{$break-md} {
    text-align: start;
  }
  a {
    color: $body-text-color;
    text-decoration: none;
    font-weight: bold;
  }
}

h3 {
  color: $body-text-color;
}
</style>
