<template>
    <div>
        <b-navbar toggleable="lg" type="light" class="shadow p-3 mb-5 bg-white rounded">
      <div class="container">
    <b-navbar-brand href="#" 
    style="font-size: .9rem;" to="/"><img src="../../src/assets/metered-manual.png" width="40" height="40" alt=""> 
    <span class="ml-3 text-muted">Draft</span>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-button class="mr-3 mt-3 mt-md-0" v-b-modal.modal-1 size="sm"
            style="color: #58b59c; border: 1.2px solid; background-color: #FFF; border-color: #81ceba; font-size: .8rem;
            padding: .2rem .5rem 0 .5rem;
            "
            >Ready to publish?</b-button>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <!-- <b-button
          style="background: #fff; border: none;" size="sm" class="my-2 my-sm-0 mr-1" type="submit">
              <img src="../../src/assets/notification.png" width="16" height="16" alt="">
          </b-button> -->
        </b-nav-form>
        <b-nav-item-dropdown center>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
           <img class="rounded-circle mt-2 mt-md-0" width="32" height="32" src="../../src/assets/profile.png" alt="">
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
    <div class="container">
        <b-form>
             <b-form-input
          id="input-1"
          v-model="title"
          type="email"
          required
          placeholder="Title"
          class="border-0 input-title rounded-0"
        ></b-form-input>
        <b-form-textarea
      id="textarea"
      v-model="text"
      placeholder="Tell your history..."
      rows="1"
      max-rows="30"
      class="border-0 mt-2 input-text rounded-0"
      style="
      overflow-y: hidden;"
    ></b-form-textarea>
    </b-form>
    <div>
  <b-modal hide-footer id="modal-1" size="xl" style="opacity: 1;">
    <form action="">
    <div class="container">
        <div class="row">
        <div class="col-12 col-md-6 mt-0 p-0">
          <h6>Story Preview</h6>
          <!-- <img class="mt-2" src="../../src/assets/gif.gif" width="440" height="200" alt=""> -->
          <div class="image-draft d-flex align-items-center justify-content-center">
            <span class="text-center mb-4 w-75">
            Include a high-quality image in your story to make it more inviting to readers.
            </span>
          </div>
          <b-form-group class="col-12 col-md-10 mt-3 p-0" label-for="input-sm">
    <b-form-input v-model="title" class="input-style font-weight-bold" id="input-sm" size="sm"></b-form-input>
  </b-form-group>
   <b-form-group class="col-12 col-md-10 p-0" label-for="input-sm">
    <b-form-input v-model="text" class="input-style" id="input-sm" size="sm"></b-form-input>
  </b-form-group>

        </div>
        <div class="col-12 col-md-6 mt-5 mt-md-0 p-0">
          <div class="p-0 form-group col-12 col-md-8">
            <small id="helpId" class="text-muted">Add or change tags (up to 5) so readers know what your story is about</small>
            <!-- <label for=""></label> -->
            <input type="text" name="" id="" class="form-control rounded-0 mt-2" placeholder="add a tag..." aria-describedby="helpId">
          </div>
          <button type="submit" v-on:click="submitHistory" class="btn btn-success btn-submit">Publish now</button>
        </div>
        </div>
    </div>
    </form>
  </b-modal>
</div>
    </div>
</div>
</template>

<script>
import Axios from 'axios';

export default {
 data() {
     return {
         title: '',
         text: ''
     }
 }, 
 methods: {
   submitHistory() {
     Axios.post('http://localhost:3000/posts', {
       title: this.title,
       history: this.text
     })
   }
 }   
}
</script>

<style scoped="scss">
.input-title {
    font-size: 42px;
}

.input-title:focus, .input-text:focus {
    border-left: 1px solid  rgba(180, 180, 180, 0.84) !important;
}

.input-text {
    font-size: 21px;
}

textarea:focus, input:focus, select:focus {
border: 0 none;
outline: 0;
border-bottom: 2px solid;
}

.image-draft {
  height: 200px;
  max-width: 440px;
  background-color: rgb(247, 247, 247);
  color: rgb(197, 197, 197);
  text-align: center;
}

.input-style {
  border: none;
  border-bottom: 2px solid gray;
  border-radius: 0;
}

.input-style:focus {
  border: 0 0 0 1px solid;
  border-radius: 0;
}

@media(max-width: 520px) {
  .btn-submit {
  width: 100%;
}
}

</style>