<template>
  <section class="row center-xs container">
    <div class="col-xs-12 col-sm-10 col-md-8 col-lg-8 row">
      <h2>
        Enthusiastic Webdeveloper who loves free Open Source Software and NodeJS
      </h2>
      <div class="row">
        <div class="col-xs-8">
          <p>
            I'm called Livio. I love creating wesbites. Ever since I got a Computer, I was really interested how software works, why the work and why some are appealing to use. Since then I try to make my life and others easier by writing applications.
          </p>
          <blockquote>
            My goal is to enhance peoples lives
          </blockquote>
        </div>
        <div class="col-xs-4 row center-xs middle-md">
          <div class="portrait">
            <div class="portrait-container">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Arnold_Schwarzenegger_February_2015.jpg">
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
  padding: 10px;
  background-color: white;
  margin: 0;
  @media #{$break-md} {
    padding: 20px;
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
      border-color: #ffffff transparent transparent transparent;
      border-width: 30px $portrait_width_md * 0.75 0 0;
      @media #{$break-md} {
        border-width: 40px $portrait_width * 0.75 0 0;
      }
    }
    &:after {
      bottom: 0;
      border-color: transparent transparent #ffffff transparent;
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
