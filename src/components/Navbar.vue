<template>
    <v-app-bar app dark>
        <v-app-bar-nav-icon @click="drawer = true" class="d-flex d-md-none"></v-app-bar-nav-icon>

        <router-link to="/" class="white--text text-decoration-none">
            <span class="mx-2 headline">Nemesis&trade; Codes</span>
        </router-link>

        <v-spacer></v-spacer>

        <v-btn text to="/archive" class="d-none d-md-flex">Archive</v-btn>
        <v-btn text to="/about" class="d-none d-md-flex">About</v-btn>

        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            style="height: 100vh;"
            clipped
        >
            <v-list>
                <v-list-item>
                    <v-list-item-avatar>
                        <v-img src="@/assets/logo.png"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-title>
                        Nemesis&trade; Codes
                    </v-list-item-title>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list
                nav
                dense
            >
                <v-list-item-group
                    v-model="selectedPage"
                    active-class="deep-purple--text text--accent-4"
                    class="mt-5"
                >
                    <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-home</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Home</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-archive</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Archive</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-information</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>About</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </v-app-bar>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            drawer: false,
            selectedPage: null,
            routes: ["/", "/archive", "/about"]
        }
    },
    watch: {
        selectedPage() {
            if (this.selectedPage === undefined) return
            let path = this.routes[this.selectedPage];
            if (this.$route.path !== path) this.$router.push(path);
        }
    }
}
</script>

<style>

</style>