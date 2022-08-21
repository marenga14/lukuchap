<template>
 
  <v-app class="appcolor">
    
   <navig/>
    <v-main>
      <router-view></router-view>
    </v-main>
   
  </v-app>
</template>

<script>
 import navig from '@/components/navbar.vue'
export default {
  name: 'App',
  components: {
    navig

  },

  data: () => ({
    //
  }),
}
</script>


<style>
 .appcolor{
  background: linear-gradient(180deg, rgba(255, 246, 206, 0.185) 1.56%, rgba(45, 188, 104, 0.27) 100%);

 }
</style>
