<template>
  <section>
    <div class="bubbles" id="bubbles1"></div>
    <div class="bubbles" id="bubbles2"></div>
    <div class="bubbles" id="bubbles3"></div>
    <div class="bubbles" id="bubbles4"></div>
  </section>
</template>
<script>
export default {
  name: 'bubbles',
  props: ['noMouse'],
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
    if (this.noMouse !== '' && this.noMouse !== false) {
      window.addEventListener('mousemove', (e) => { this.update(e); });
      window.addEventListener('touchmove', (e) => { this.update(e); });
    }
  },
};
</script>
<style scoped lang="scss">
@import '../styles/main';
section {
  height: 0;
  width: 0;
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
</style>
