<template>
    <div>
    <b-navbar toggleable="lg" type="dark" variant="success">
        <b-navbar-brand href="#">
            <b-icon-shop></b-icon-shop>
            Admin
        </b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item @click="goHome" active> Salir </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>

    <div>
        <b-modal id="modal-1" title="BootstrapVue">
        <p class="my-4">Admin</p>
        </b-modal>    
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return{

        }        
    },
    created(){

    },
    methods:{
        goHome(){
            this.$router.push('/')
        }
    }
}
</script>
