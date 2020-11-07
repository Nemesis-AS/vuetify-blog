<template>
    <v-container>
        <p class="text-center text-h3 font-weight-light">Latest Posts</p>
        <v-row class="d-flex justify-space-around">
            <v-col md="5" class="col-xs-12">
                <v-card>
                    <v-img src="@/assets/post1.jpg"></v-img>

                    <v-card-title>Post #1</v-card-title>
                    <v-card-subtitle>by Nemesis&trade;</v-card-subtitle>
                    
                    <v-card-text>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, officia quo voluptas quibusdam porro temporibus. Quisquam iste rem eveniet fugit!</p>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="success" text>
                            <router-link to="/post/1" class="text-decoration-none success--text">
                                Read More
                            </router-link>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <v-col md="5">
                <v-card>
                    <v-img src="@/assets/post2.jpg"></v-img>

                    <v-card-title>Post #2</v-card-title>
                    <v-card-subtitle>by Nemesis&trade;</v-card-subtitle>
                    
                    <v-card-text>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, officia quo voluptas quibusdam porro temporibus. Quisquam iste rem eveniet fugit!</p>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="success" text>
                            <router-link to="/post/2" class="text-decoration-none success--text">
                                Read More
                            </router-link>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "FeaturedPosts",
    methods: {
        getStartingWords(text, words) {
            let textArray = text.split(" ");
            textArray.length = words;
            return textArray.join(" ");
        }
    }
}
</script>

<style>

</style>