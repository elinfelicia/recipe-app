<template>
  <div class="home">
    <h1>It's dinner time!</h1>
    <nav>
      <router-link to="/recipes">Recipes</router-link> |
      <router-link to="/favourites">Favourites</router-link>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'HomeView',

});
</script>
