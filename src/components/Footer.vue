<template>
    <v-container fluid class="white--text grey darken-4">
        <v-row class="d-flex justify-space-around text-center">
            <v-col cols="4">
                <p class="font-weight-bold">Important Links</p>
                <ul class="list-unstyled">
                    <li>
                        <router-link to="/" class="white--text text-decoration-none">
                            Home
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/archive" class="white--text text-decoration-none">
                            Archive
                        </router-link>
                    </li>
                </ul>
            </v-col>

            <v-col cols="4">
                <p class="font-weight-bold">Important Links</p>
                <ul class="list-unstyled">
                    <li>
                        <router-link to="/post/1" class="white--text text-decoration-none">
                            Post#1
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/post/2" class="white--text text-decoration-none">
                            Post#2
                        </router-link>
                    </li>
                </ul>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style>
    .list-unstyled {
        list-style: none;
        padding-left: 0 !important;
    }
</style>