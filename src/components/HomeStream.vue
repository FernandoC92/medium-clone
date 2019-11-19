/-0,
4<template>
<div class="container-fluid w-100 w-md-75">
<div class="row">
    <div class="col-12">
        <div class="row p-0">
            <div class="col-sm-12 col-md-6 col-lg-4 p-0">
                <div class="img-title"
                ></div>
                <div class="ml-3 ml-md-5 text-left">
                    <h5 class="font-weight-bold">{{ posts[0].title }}</h5>
                    <small class="text-muted">{{ posts[0].summary }}</small>
                    <br>
                    <div class="mt-2" style="line-height: 1.2;">
                    <small class="text-black">{{ posts[0].author }} in {{ posts[0].category }}</small>
                    <div>
                    <small class="text-muted">{{ posts[0].dataPost }} • {{ posts[0].timeRead }} read</small><img
                    src="../../src/assets/star.png" width="10" height="10" alt="">
                    </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 mt-5 mt-md-0">
                <div class="d-flex">
                <div class="img-100"></div>
                <div class="text--box">
                <h6 class="font-weight-bold text-left ml-4 mt-2">Inside the Underground Baby Trade in the Philippines</h6>
                 <div class="mt-3 ml-4 text-left" style="line-height: 1.2;">
                    <small class="text-black">Ana Karla in Social</small>
                    <div>
                    <small class="text-muted">Nov 17 • 8 min read</small> 
                    <img class="ml-2" src="../../src/assets/star.png" width="10" height="10" alt="">
                    </div>
                    </div>
                </div>
                </div>
                <div class="d-flex mt-4">
                <div class="img-100"></div>
                <div class="text--box">
                <h6 class="font-weight-bold text-left ml-4 mt-2">What It Means to Walk Around a City Without Purpose</h6>
                 <div class="mt-3 ml-4 text-left" style="line-height: 1.2;">
                    <small class="text-black">Ana Karla in Social</small>
                    <div>
                    <small class="text-muted">Nov 17 • 8 min read</small> 
                    <img class="ml-2" src="../../src/assets/star.png" width="10" height="10" alt="">
                    </div>
                    </div>
                </div>
                </div>
                <div class="d-flex mt-4">
                <div class="img-100"></div>
                <div class="text--box">
                <h6 class="font-weight-bold text-left ml-4 mt-2">Why should you learn Go?</h6>
                 <div class="mt-3 ml-4 text-left" style="line-height: 1.2;">
                    <small class="text-black">Ana Karla in Social</small>
                    <div>
                    <small class="text-muted">Nov 17 • 8 min read</small> 
                    <img class="ml-2" src="../../src/assets/star.png" width="10" height="10" alt="">
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 mt-5 mt-md-0 p-0">
                 <div class="img-title2"></div>
                <div class="ml-4 text-left">
                    <h5 class="font-weight-bold">React vs Angular vs Vue.js</h5>
                    <small class="text-muted">So, what is the situation in the frontend garden in 2019?</small>
                    <br>
                    <div class="mt-2" style="line-height: 1.2;">
                    <small class="text-black">Ana Karla in Social</small>
                    <div>
                    <small class="text-muted">Nov 17 • 8 min read</small> <img
                    src="../../src/assets/star.png" width="10" height="10" alt="">
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>    
</template>

<script>
import Axios from 'axios';

export default {
    data() {
        return {
           posts: []
        }
    },
    methods: {
       getPosts() {
           let url = 'http://localhost:3000/posts'
           Axios.get(url).then( response => {
               this.posts = response.data;
           })
       }
    },
    mounted() {
        this.getPosts();
    }
}
</script>

<style>
.img-title {
    background-image: url(../../src/assets/gif.gif);
    height: 150px;
    width: 100%;
    background-position: 51% 34%;
    margin-bottom: 1rem;
    background-size: 90% 100%;
    background-repeat: no-repeat;
    flex: 0 1 auto;
}

.img-title2 {
    background-image: url(../../src/assets/front-end-battle.jpeg);
    height: 150px;
    width: 100%;
    background-position: 51% 34%;
    margin-bottom: 1rem;
    background-size: 90% 100%;
    background-repeat: no-repeat;
    flex: 0 1 auto;
}

.img-100 {
    background-image: url(../../src/assets/go-lang.gif);
    height: 100px;
    width: 100px;
    background-size: 100%;
    background-repeat: no-repeat;
    
}
.text--box {
    width: 300px !important;
}

@media(max-width: 520px) {
    /* .text--box {
        width: 350px !important;
    } */
}

</style>