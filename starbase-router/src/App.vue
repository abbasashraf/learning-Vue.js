<template>
  <div id="app">
    <h3>Starbase Router</h3>
    <h4>
      <router-link class="link" to="/data/people">peoples</router-link> |
      <router-link class="link" to="/data/planets">planets</router-link>      
    </h4>
    <router-view></router-view>
  </div>
</template>


