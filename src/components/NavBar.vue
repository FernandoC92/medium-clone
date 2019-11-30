<template>
  <div>
  <b-navbar toggleable="lg" type="light" class="shadow p-3 mb-5 bg-white rounded">
      <div class="container">
    <b-navbar-brand href="#" 
    style="font-size: 2rem;" to="/">Medium</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav> -->

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-button
          v-on:click="seen = !seen"
          style="background: #fff; border: none;" size="sm" class="my-2 my-sm-0 mr-1" type="submit">
              <img src="../../src/assets/magnifying-glass.png" width="16" height="16" alt="">
          </b-button>
          <b-form-input v-if="seen" size="sm" class="mr-sm-2" placeholder="Search Medium"
          style="
          border: none;
          "></b-form-input>
          <b-button
          style="background: #fff; border: none;" size="sm" class="my-2 my-sm-0 mr-1" type="submit">
              <img src="../../src/assets/notification.png" width="16" height="16" alt="">
          </b-button>
        </b-nav-form>
        <b-nav-item-dropdown center>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
           <img class="rounded-circle" width="32" height="32" src="../../src/assets/profile.png" alt="">
          </template>
          <b-dropdown-item href="#" class="border-bottom py-3">
            <div class="d-flex">
              <img class="rounded-circle" width="48" height="48" src="../../src/assets/profile.png" alt="">
              <div class="d-flex flex-column ml-3">
              <small class="font-weight-bold">Fernando</small>
              <small class="text-muted mt-1">@fernando_11829</small>
              </div>
            </div>
            </b-dropdown-item>
            <div class="py-2">
              <b-dropdown-item href="#">
                <router-link to="/new-story">
                  <span class="text-muted">New Story</span>    
                </router-link>
                </b-dropdown-item>
          <b-dropdown-item href="#"><span class="text-muted">Stories</span></b-dropdown-item>
            </div>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>
</div>
</template>

<script>
export default {
  data() {
    return {
      seen: false
    }
  },
  methods: {
    
  }

}
</script>

<style>
/* Verificar melhor solução para a retirada do dropdown-toggle */

.dropdown-toggle::after {
  display: none !important;
}
</style>