<template>
    <v-container>
        <div class="post-row">
            <v-row justify="center">
                <v-col sm="3">
                    <router-link to="/post/2">
                        <v-img src="@/assets/post2.jpg"></v-img>
                    </router-link>
                </v-col>
                <v-col sm="7" class="d-flex flex-column">
                    <router-link to="/post/2" class="blue--text text-decoration-none">
                        <span class="font-weight-light text-h4">Post#2</span>
                    </router-link>
                    <router-link to="/writer/nemesis" class="grey--text text-subtitle-1">
                        <span class="font-weight-normal">
                            by <span class="font-weight-bold">Nemesis&trade;</span>
                        </span>
                    </router-link>

                    <span class="font-weight-normal text-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia praesentium beatae veniam fugiat accusantium quasi explicabo ad sint ullam sequi, perspiciatis suscipit itaque dolore vel animi culpa voluptate reiciendis libero odit sed voluptas dignissimos laudantium! Voluptatum, odit! Explicabo, quos minima ipsam quidem, quod quo delectus est eligendi molestiae id earum?</span>
                </v-col>
            </v-row>

            <v-divider></v-divider>
        </div>

        <div class="post-row">
            <v-row justify="center">
                <v-col sm="3">
                    <router-link to="/post/1">
                        <v-img src="@/assets/post1.jpg"></v-img>
                    </router-link>
                </v-col>
                <v-col sm="7" class="d-flex flex-column">
                    <router-link to="/post/1" class="blue--text text-decoration-none">
                        <span class="font-weight-light text-h4">Post#1</span>
                    </router-link>
                    <router-link to="/writer/nemesis" class="grey--text text-subtitle-1">
                        <span class="font-weight-normal">
                            by <span class="font-weight-bold">Nemesis&trade;</span>
                        </span>
                    </router-link>

                    <span class="font-weight-normal text-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia praesentium beatae veniam fugiat accusantium quasi explicabo ad sint ullam sequi, perspiciatis suscipit itaque dolore vel animi culpa voluptate reiciendis libero odit sed voluptas dignissimos laudantium! Voluptatum, odit! Explicabo, quos minima ipsam quidem, quod quo delectus est eligendi molestiae id earum?</span>
                </v-col>
            </v-row>

            <v-divider inset></v-divider>
        </div>
    </v-container>
</template>

<script>
export default {
    name: "Archive"
}
</script>

<style>

</style>