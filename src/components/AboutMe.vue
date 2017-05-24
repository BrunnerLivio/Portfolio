<template>
  <section class="row center-xs container">
    <div class="col-xs-12 col-sm-10 col-md-8 col-lg-8 row">
      <h2>
        Enthusiastic Webdeveloper who loves free Open Source Software and NodeJS
      </h2>
      <div class="row">
        <div class="col-xs-8">
          <p>
            I'm called Livio. I love creating wesbites. Ever since I got a Computer, I was really interested how software works, why they work and why some are appealing to use. Since then I try to make my life and others easier by writing applications.
          </p>
          <blockquote>
            My goal is to enhance peoples lives
          </blockquote>
        </div>
        <div class="col-xs-4 row center-xs middle-md">
          <div class="portrait">
            <div class="portrait-container">
              <img src="/static/arnold.jpg">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'aboutMe',
};
</script>

<style scoped lang="scss">
@import '../styles/main';

.container {
  width: 100%;
  background-color: $light_background;
  margin: 0;
  padding-top: 20px;
  padding-bottom: 30px;
  @media #{$break-md} {
    padding: 50px;
  }
}

p {
  margin: 20px 0;
  @media #{$break-md} {
    margin: 40px 0;
  }
}

.portrait {
  $portrait_width: 200px;
  $portrait_width_md: 110px;
  width: $portrait_width_md;
  position: relative;
  top: 20px;
  @media #{$break-md} {
    width: $portrait_width;
    top: 0;
  }
  &-container {
    position: relative;
    &::before,
    &::after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      position: absolute;
      border-style: solid;
    }
    &:before {
      border-color: $light_background transparent transparent transparent;
      border-width: 30px $portrait_width_md * 0.75 0 0;
      @media #{$break-md} {
        border-width: 40px $portrait_width * 0.75 0 0;
      }
    }
    &:after {
      bottom: 0;
      border-color: transparent transparent $light_background transparent;
      border-width: 0 0 30px $portrait_width_md * 0.75;
      left: $portrait_width_md * 0.25;
      @media #{$break-md} {
        left: $portrait_width * 0.25;
        border-width: 0 0 40px $portrait_width * 0.75;
      }
    }
  }
  img {
    width: 100%;
  }
}
</style>
