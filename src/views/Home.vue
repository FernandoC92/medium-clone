<template>
  <div>
   <NavBar />
   <HomeStream />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '../components/NavBar';
import HomeStream from '../components/HomeStream';

export default {
  name: 'home',
  components: {
    NavBar, 
    HomeStream
  }
}
</script>
