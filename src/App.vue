<template>
<div class="">
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <!-- <b-navbar-brand href="#">Home</b-navbar-brand> -->

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item><router-link to="/Scg">Find X,Y,Z Value</router-link></b-nav-item>
        <b-nav-item><router-link to="/location">Find Restaurant</router-link></b-nav-item>
        <b-nav-item><router-link to="/mycv">CV</router-link></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
  </div>
  <div class="footer-copyright text-center py-3">

      &copy; 2018 Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>

  </div>
</div>
  
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50; 
  min-height: 100%;
  /* margin-top: 60px; */
}
.footer-copyright {
    /* bottom: 0 !important; */
    /* position: absolute; */
    margin-top: 15%;
    text-align: center !important;
    width: 100%;
    background-color: antiquewhite;
} 
router-link {
  color: white !important;
}
</style>
