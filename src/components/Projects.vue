<template>
  <section>
    <div class="triangle-top-left"></div>
    <div class="triangle-top-right"></div>
    <div class="content-shadow"></div>
    <div class="project-wrapper row container center-xs">
      <div id="projects">
        <section class="project middle-xs" id="tsp-web-project">
          <div class="col-md-8 col-xs-12 col-md-offset-2">
            <h3>tsp-web</h3>
            <project-preview>
              <picture>
                <source media="(min-width: 1300px)" srcset="/static/projects/tsp-web/tsp-web_1500x.jpg">
                <source media="(min-width: 1000px)" srcset="/static/projects/tsp-web/tsp-web_1200x.jpg">
                <source media="(min-width: 570px)" srcset="/static/projects/tsp-web/tsp-web_770x.jpg">
                <source media="(min-width: 200px)" srcset="/static/projects/tsp-web/tsp-web_400x.jpg">
                <img src="/static/projects/tsp-web/tsp-web_original.jpg" alt="tsp-web">
              </picture>
            </project-preview>
            <div class="col-xs-12 col-xs-offset-0 col-md-8 col-md-offset-2 middle-xs">
              <p>
                tsp-web is a visualization of the Debian program
                <a href="http://vicerveza.homeunix.net/~viric/soft/ts/" target="_blank">task-spooler</a>. It runs on NodeJS. Technologies like ExpressJS or Socket.IO were used in this project. One task to accomplish was parsing the raw output from the tsp-command using
                <i>regular expressions</i>.
              </p>
              <div class="technologies">
                <i class="icon-javascript"></i>
                <i class="icon-nodejs"></i>
                <i class="icon-shell"></i>
              </div>
              <div class="row center-xs middle-xs">
                <primary-button href="https://github.com/Roche/tsp-web" target="_blank">GITHUB</primary-button>
              </div>
            </div>
          </div>
        </section>
        <section class="project middle-xs" id="pogo-api-project">
          <div class="col-md-8 col-xs-12 col-md-offset-2">
            <h3>POGO API</h3>
            <project-preview>
              <picture>
                <source media="(min-width: 1300px)" srcset="/static/projects/pogoapi/pogoapi_1500x.jpg">
                <source media="(min-width: 1000px)" srcset="/static/projects/pogoapi/pogoapi_1200x.jpg">
                <source media="(min-width: 570px)" srcset="/static/projects/pogoapi/pogoapi_770x.jpg">
                <source media="(min-width: 200px)" srcset="/static/projects/pogoapi/pogoapi_400x.jpg">
                <img src="/static/projects/pogoapi/pogoapi_original.jpg" alt="POGO API">
              </picture>
            </project-preview>
            <div class="col-xs-12 col-xs-offset-0 col-md-8 col-md-offset-2 middle-xs center-xs">
              <p>
                POGO API is a RESTful API for Pokemon GO. This API is split in 3 projects. The
                <a href="https://github.com/BrunnerLivio/pokemongo-web-api" target="_blank">API istelf</a>,
                <a href="https://github.com/BrunnerLivio/pokemongo-game-master" target="_blank">pokemongo-game-master</a> which is raw PokemonGO data and
                <a href="https://github.com/BrunnerLivio/pokemongo-json-pokedex" target="_blank">pokemongo-json-pokedex</a> which transforms the raw data into better processable JSON information. The whole application is written in TypeScript. Handlebars is used for the static frontend.
              </p>
              <div class="technologies">
                <i class="icon-javascript"></i>
                <i class="icon-nodejs"></i>
              </div>
              <div class="row center-xs middle-xs">
                <primary-button href="https://github.com/BrunnerLivio/pokemongo-web-api" target="_blank">GITHUB</primary-button>
              </div>
            </div>
          </div>
        </section>
        <section class="project middle-xs" id="molior-project">
          <div class="col-md-8 col-xs-12 col-md-offset-2">
            <h3>molior</h3>
            <project-preview>
              <picture>
                <source media="(min-width: 1300px)" srcset="/static/projects/molior/molior_1500x.jpg">
                <source media="(min-width: 1000px)" srcset="/static/projects/molior/molior_1200x.jpg">
                <source media="(min-width: 570px)" srcset="/static/projects/molior/molior_770x.jpg">
                <source media="(min-width: 200px)" srcset="/static/projects/molior/molior_400x.jpg">
                <img src="/static/projects/molior/molior_original.jpg" alt="Molior">
              </picture>
            </project-preview>
            <div class="col-xs-12 col-xs-offset-0 col-md-8 col-md-offset-2 middle-xs center-xs">
              <p>
                molior is an
                <i>automagic</i> debian builder, which builds git repositories if there's a new release (git tag like v0.0.2), builds them and publishes/serves the built debian packages through aptly. My terroritory was mostly in the frontend and backend API. The difficult parts to accomplish in this project were to create an appealing web interface which broke down complex tasks.
              </p>
            </div>
            <div class="technologies">
              <i class="icon-javascript"></i>
              <i class="icon-postgres"></i>
              <i class="icon-debian"></i>
            </div>
          </div>
        </section>
        <section class="project middle-xs" id="mk-deps-project">
          <div class="col-md-8 col-xs-12 col-md-offset-2">
            <h3>mk-deps</h3>
            <project-preview>
              <img src="../assets/mk-deps.gif" alt="mk-deps">
            </project-preview>
            <div class="col-xs-12 col-xs-offset-0 col-md-8 col-md-offset-2 middle-xs center-xs">
              <p>
                CLI tool which installs the runtime dependencies of debian packages, without installing the package itself. This application is small, but well-rounded with automatic unit tests, MAN-pages and autocompletion. It is written in Python. The program parses a "debian/control" file using regular expressions, in order to get its runtime dependencies.
              </p>
              <div class="technologies">
                <i class="icon-python"></i>
                <i class="icon-shell"></i>
              </div>
              <div class="row center-xs middle-xs">
                <primary-button href="https://github.com/Roche/mk-deps" target="_blank">GITHUB</primary-button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div id="mk-deps-background" class="project-background"></div>
    <div id="molior-background" class="project-background"></div>
    <div id="pogo-api-background" class="project-background"></div>
    <div id="tsp-web-background" class="project-background"></div>
    <div id="projects-background" class="project-background"></div>
    <div class="triangle-bottom-left"></div>
    <div class="triangle-bottom-right"></div>
    <div class="content-shadow"></div>
  </section>
</template>

<script>
import PrimaryButton from '@/components/PrimaryButton';
import ProjectPreview from '@/components/ProjectPreview';
import { addClass, removeClass, offset } from './Utils';

export default {
  name: 'projects',
  components: {
    'primary-button': PrimaryButton,
    'project-preview': ProjectPreview,
  },
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
        addClass(this.$tspWeb, 'active');
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

<style lang="scss">
@import '../styles/main';
$triangle-height: 100px;
$shadow-background: darken($light-background, 8);
$shadow-content-background: darken($light-background, 4);
$shadow-content-background-even: darken($shadow-content-background, 2);
$content-margin-md: 100;
$content-margin-xs: 30;
$shadow-height-md: 50;
$shadow-height-xs: 40;

section {
  position: relative;
}

.triangle-top-left {
  left: 0;
  top: 0;
  border-width: 0 $content-margin-xs / 2 + px $shadow-height-xs + px 0;
  border-color: transparent $shadow-background transparent transparent;
  @media #{$break-md} {
    border-width: 0 $content-margin-md / 2 + px $shadow-height-md + px 0;
  }
}

.triangle-top-right {
  right: 0;
  top: 0;
  border-width: $shadow-height-xs + px $content-margin-xs / 2 + px 0 0;
  border-color: $shadow-background transparent transparent transparent;
  @media #{$break-md} {
    border-width: $shadow-height-md + px $content-margin-md / 2 + px 0 0;
  }
}

.triangle-bottom-left {
  left: 0;
  bottom: 0;
  border-color: transparent transparent $shadow-background transparent;
  border-width: 0 0 $shadow-height-xs + px $content-margin-xs / 2 + px;
  @media #{$break-md} {
    border-width: 0 0 $shadow-height-md + px $content-margin-md / 2 + px;
  }
}

.triangle-bottom-right {
  right: 0;
  bottom: 0;
  border-color: transparent transparent transparent $shadow-background;
  border-width: $shadow-height-xs + px 0 0 $content-margin-xs / 2 + px;
  @media #{$break-md} {
    border-width: $shadow-height-md + px 0 0 $content-margin-md / 2 + px;
  }
}

.triangle-top-left,
.triangle-top-right,
.triangle-bottom-left,
.triangle-bottom-right {
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

.content-shadow {
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
  padding-top: 20px;
  position: relative;
  min-height: 100vh;
  &:nth-child(even) {
    background: $shadow-content-background-even;
    &:not(:first-child) {
      &::before {
        display: block;
        content: '';
        height: 20px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        @include gradient-vertical(rgba(0, 0, 0, 0.04), rgba(255, 255, 255, 0.001));
        border-top: 1px solid rgba(255, 255, 255, 0.8);
      }
    }
    &:not(:last-child) {
      &::after {
        display: block;
        content: '';
        height: 20px;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        @include gradient-vertical(rgba(255, 255, 255, 0.001), rgba(0, 0, 0, 0.04));
        border-bottom: 1px solid rgba(255, 255, 255, 0.8);
      }
    }
    .project-preview-container {
      .project-preview-container-right-shadow {
        @include gradient-horizontal(rgba(255, 255, 255, 0.001), $shadow-content-background-even);
      }
      .project-preview-container-left-shadow {
        @include gradient-horizontal($shadow-content-background-even, rgba(255, 255, 255, 0.001));
      }
    }
  }
  &:nth-child(odd) {
    .project-preview-container-right-shadow {
      @include gradient-horizontal(rgba(255, 255, 255, 0.001), $shadow-content-background);
    }
    .project-preview-container-left-shadow {
      @include gradient-horizontal($shadow-content-background, rgba(255, 255, 255, 0.001));
    }
  }
  &:first-child {
    padding-top: 50px;
    h3 {
      margin-top: 0;
    }
  }
  h3 {
    opacity: 0;
    transition: 0.5s ease-in-out opacity, 0.5s ease-in-out top;
    position: relative;
    top: -30px;
  }
  p {
    opacity: 0;
    transition: 0.5s ease-in-out opacity;
  }
  &.active {
    h3,
    .project-preview,
    p {
      top: 0;
      opacity: 1;
    }
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
  a {
    color: $body-text-color;
    text-decoration: none;
    font-weight: bold;
  }
}

.technologies {
  margin: 30px;
  i {
    font-size: 30px;
    @media #{$break-md} {
      font-size: 40px;
    }
    color: rgba(0, 0, 0, 0.4);
    margin: 10px;
  }
}

h3 {
  color: $body-text-color;
  text-align: center;
}
</style>
