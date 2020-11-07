<template>
    <v-container fluid class="black--text d-flex flex-column align-center justify-center light-grey" style="background: #e9ecef;">
        <code class="text-center text-h4 monospace black--text mb-5">Hello World!</code>
        <span class="font-weight-light text-h5 text-center">Kickstart your Coding Adventure with me!</span>
        <v-container style="width: 80%" class="d-flex w-md-100">
            <v-text-field type="email" label="Email Address" outlined dense color="success"></v-text-field>
            <v-btn color="success" class="mx-2">Sign Up</v-btn>
        </v-container>
    </v-container>
</template>

<script>
export default {
    name: "NewsletterBlock"
}
</script>

<style scoped>
    .light-grey {
        background-color: #e9ecef !important;
    }
    .monospace {
        font-family: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace !important;
        background: none !important;
    }
    @media(max-width: 600px) {
        .w-md-100 {
            width: 100% !important;
        }
    }
</style>