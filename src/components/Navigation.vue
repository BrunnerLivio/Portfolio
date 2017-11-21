<template>
  <div class="navigation">
    <nav>
        <div class="bubbles">
        <app-bubbles></app-bubbles>
        </div>
        <section class="row center-xs">
        <ul class="col-md-6 col-xs-12 row center-xs">
            <li class="box col-xs-4 middle-xs row center-xs">
                <a v-scroll-to="'#about-me'">
                    <span>About Me</span>
                </a>
            </li>
            <li class="box col-xs-4 middle-xs row center-xs">
                <a v-scroll-to="'#projects'">
                    <span>Projects</span>
                </a>
            </li>
            <li class="box col-xs-4 middle-xs row center-xs">
                <a v-scroll-to="'#contact'">
                    <span>Contact</span>
                </a>
            </li>
        </ul>
        </section>
    </nav>
    <div class="placeholder"></div>
  </div>
</template>
<script>
import Bubbles from '@/components/Bubbles';
import { offset, addClass, removeClass } from './Utils';

export default {
  name: 'navigation',
  components: {
    'app-bubbles': Bubbles,
  },
  methods: {
    update() {
      const scrollTop = window.scrollY;
      if (scrollTop > this.navTop) {
        addClass(this.$el, 'sticky');
      } else {
        removeClass(this.$el, 'sticky');
      }
    },
  },
  mounted() {
    this.$nav = this.$el.querySelector('nav');
    this.navTop = offset(this.$nav).top;
  },
  created() {
    window.addEventListener('scroll', () => { this.update(); });
    window.addEventListener('touchmove', () => { this.update(); });
    window.addEventListener('resize', () => { this.update(); });
  },
  destroyed() {
    window.removeEventListener('scroll', this.update);
    window.removeEventListener('resize', this.update);
    window.removeEventListener('touchmove', this.update);
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/main';
$navigation-height: 60px;
$navigation-height-sm: 40px;
.navigation {
    overflow: hidden;
    &.sticky {
        nav {
            position: fixed;
            z-index: 30;
            top: 0;
            left: 0;
            .bubbles {
                opacity: 1;
            }
        }
        .placeholder {
            margin-top: 0;
        }
    }
}
.placeholder {
     width: 100vw;
     height: $navigation-height-sm;
     margin-top: $navigation-height-sm * -1;
     @media #{$break-md} {
        height: $navigation-height;
        margin-top: $navigation-height * -1;
     }
     position: relative;
     z-index: -1;
}
nav {
    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12), 0 5px 5px -3px rgba(0, 0, 0, .2);
    background: $primary; 
    height: 100%;
    margin: 0;
    width: 100%;
    height: $navigation-height-sm;
    @media #{$break-md} {
        height: $navigation-height;
     }
    overflow: hidden;
    text-transform: uppercase;
    .row {
        width: 100%;
        margin-left: 0;
        margin-right: 0;
    }
    @include gradient-vertical($primary, #6D00A1);
    .bubbles {
        opacity: 0;
        transition: 0.5s ease-in-out opacity;
        z-index: -1;
        position: absolute;
    }
    ul {
        margin: 0;
        li a {
            color: white;
            list-style: none;
            font-family: $accent_font;
            text-decoration: none;
            @include poly-fluid-sizing('font-size', (576px: 16px, 992px: 18px, 320px: 14px, 191px: 10px));
            height: $navigation-height-sm;
            display: flex;
            justify-content: center;
            align-items: center;
            @media #{$break-md} {
                height: $navigation-height;
            }
            &:hover {
                color:$accent;
                cursor: pointer;
            }
        }
    }
} 
</style>

