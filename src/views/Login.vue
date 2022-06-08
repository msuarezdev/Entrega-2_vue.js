<template>
    <div class="container">
        <h3 style="margin:8px;">Iniciar sesión</h3>
        <hr>
    <b-form @submit.prevent="login">
            <b-form-group
                id="input-group-2"
                label="Email"
                label-for="input-2"
                >
                <b-form-input
                  id="input-2"
                  v-model="email"
                  type="email"
                  placeholder="Ingrese email"
                  required
                ></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-group-3"
                label="Password"
                label-for="input-3"
                
                >
                <b-form-input
                  id="input-3"
                  v-model="password"
                  type="password"
                  placeholder="Ingrese contreseña"
                  required
                ></b-form-input>
            </b-form-group>


      <b-button type="submit" variant="info" style="margin:8px;">Iniciar sesión</b-button>

    </b-form>
    <div v-if="error">
      <b-alert show variant="danger">{{ error }}</b-alert>
    </div>

  </div>

</template>


<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        error:''
      }
    },  
    name: 'Login',
    methods: {
        login(){
            if ( this.email && this.password) {
            //se envia form
            }else{
                this.error = 'Todos los campos son obligatorios para registrarse'
            }
        }
    }
}
</script>
