<template>
    <v-container fluid>
        <v-container>
            <p class="font-weight-light text-h3 my-0">{{ title }}</p>
            <p class="font-italic grey--text">by <span class="text-decoration-bold">{{ author }}</span></p>
            <div class="d-flex">
                <v-icon large class="social-icon" @click="openLink(link_fb)">mdi-facebook</v-icon>
                <v-icon large class="social-icon" @click="openLink(link_ig)">mdi-instagram</v-icon>
                <v-icon large class="social-icon" @click="openLink(link_tw)">mdi-twitter</v-icon>
                <v-icon large class="social-icon" @click="openLink(link_ds)">mdi-discord</v-icon>
                <v-icon large class="social-icon" @click="openLink(link_yt)">mdi-youtube</v-icon>

                <v-spacer></v-spacer>

                <v-icon large class="social-icon" @click="sharePost()">mdi-share</v-icon>
            </div>
            <v-divider class="black"></v-divider>
        </v-container>
        <v-container>
            <div>
                <v-img :src="getImage(imageUrl)"></v-img>
                <p class="text-subtitle-1 font-weight-bold text-center">{{ imageCaption }}</p>
            </div>
            <p class="text-body">
                {{ body }}
            </p>
        </v-container>
    </v-container>
</template>

<script>
import Posts from "@/data/Posts.js";

export default {
    name: "Post",
    data() {
        return {
            id: this.$route.params.id,
            posts: Posts.posts,
            title: "Something",
            author:"Someone",
            imageUrl: "@/assets/logo.png",
            imageCaption: "SomethingElse",
            body: "Something Big",
            link_fb: "",
            link_ig: "",
            link_tw: "",
            link_ds: "",
            link_yt: ""
        }
    },
    watch: {
        $route: {
            handler: function(to) {
                this.fetchPost(to.params.id);
            }
        }
    },
    methods: {
        fetchPost(id) {
            let post = this.posts.find(item => item.id == id);
            this.title = post.title;
            this.author = post.author;
            this.imageUrl = post.imageurl;
            this.imageCaption = post.imagecaption;
            this.body = post.body;
            this.link_fb = post.social.fb;
            this.link_ig = post.social.ig;
            this.link_tw = post.social.tw;
            this.link_ds = post.social.ds;
            this.link_yt = post.social.yt;
        },
        getImage(url) {
            let urlArray = url.split("/");
            return require(`@/assets/${urlArray[urlArray.length - 1]}`);
        },
        openLink(url) {
            window.open(url, '_blank');
        },
        sharePost() {
            console.log("WIP");
        }
    },
    mounted() {
        this.fetchPost(this.id);
    }
}
</script>

<style>
    .social-icon:hover {
        transform: scale(1.2);
    }
</style>