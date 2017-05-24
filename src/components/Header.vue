<template>
  <header>
    <div class="bubbles" id="bubbles1"></div>
    <div class="bubbles" id="bubbles2"></div>
    <div class="bubbles" id="bubbles3"></div>
    <div class="bubbles" id="bubbles4"></div>
    <div class="sunset"></div>
    <section class="row center-xs middle-xs introduction">
      <div>
        <div class="row center-xs">
          <div class="logo"></div>
        </div>
        <h1>
          Hi, I'm
          <span class="highlight">Livio</span>
        </h1>
      </div>
    </section>
    <section class="triangles"></section>
  </header>
</template>

<script>
export default {
  name: 'header',
  methods: {
    update(e) {
      const x = e.pageX - this.$el.offsetLeft;
      this.$el.querySelector('#bubbles4').style.left = `-${x * 0.01}px`;
      this.$el.querySelector('#bubbles3').style.left = `-${x * 0.008}px`;
      this.$el.querySelector('#bubbles2').style.left = `-${x * 0.005}px`;
      this.$el.querySelector('#bubbles1').style.left = `-${x * 0.001}px`;
    },
  },
  mounted() {
    window.addEventListener('mousemove', (e) => { this.update(e); });
    window.addEventListener('touchmove', (e) => { this.update(e); });
  },
};

</script>

<style scoped lang="scss">
@import '../styles/main';
header {
  margin: 0;
  background: $primary;
  @include gradient-radial($primary, $primary_dark);
  width: 100%;
  position: relative;
  padding: 0;
  height: 100vh;
  overflow: hidden;
  @media #{$break-md} {
    height: 80vh;
  }
  .sunset {
    width: 100%;
    height: 50%;
    display: block;
    position: absolute;
    bottom: 0;
    @include gradient-vertical(rgba(255, 255, 255, 0), $accent);
    opacity: 0.38;
  }
}

@keyframes animStar {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-2000px);
  }
}




.bubbles {
  animation: animStar linear infinite;
  border-radius: 200px;
  position: relative;
  &#bubbles1 {
    box-shadow: $bubble-shadow-1;
    width: 4px;
    height: 4px;
    animation-duration: 200s;
  }

  &#bubbles2 {
    box-shadow: $bubble-shadow-2;
    width: 8px;
    height: 8px;
    animation-duration: 160s;
  }

  &#bubbles3 {
    box-shadow: $bubble-shadow-3;
    width: 12px;
    height: 12px;
    animation-duration: 120s;
    opacity: 0.1;
  }

  &#bubbles4 {
    box-shadow: $bubble-shadow-4;
    width: 16px;
    height: 16px;
    animation-duration: 100s;
  }
}

.highlight {
  @include gradient-vertical($accent_light, $accent);
  color: $accent;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
}

.introduction {
  height: 100%;
  width: 100%;
  top: -50px;
  position: relative;
  margin: 0;
}

.triangles {
  position: absolute;
  bottom: 0;
  left: 0;
  background: url(../assets/header_triangles.png);
  background-size: 100% 100%;
  width: 100%;
  height: 130px;
  @media #{$break-md} {
    height: 200px;
  }
}

.logo {
  background: url(../assets/logo.png);
  background-size: 100% 100%;
  position: relative;
  height: 75px;
  width: 75px;
  margin: 10px;
  @media #{$break-md} {
    height: 100px;
    width: 100px;
  }
}
</style>
