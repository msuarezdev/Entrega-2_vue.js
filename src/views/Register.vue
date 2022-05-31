<template>
    <div class="container">
        <h3 style="margin:8px;">Crea una cuenta</h3>
        <hr>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-1" label="Your Name:" label-for="input-1">
                <b-form-input
                id="input-1"
                v-model="nombre"
                placeholder="Ingrese su nombre"
                required
                ></b-form-input>
            </b-form-group>
      
            <b-form-group
                id="input-group-2"
                label="Email address:"
                label-for="input-2"
                description="We'll never share your email with anyone else."
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
                label="Password:"
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


      <b-button type="submit" variant="info" style="margin:8px;">Registrarme</b-button>

    </b-form>

  </div>

</template>


<script>
  export default {
     name: 'Register',
     data() {
      return {
        email: '',
        nombre: '',
        password: '',
        error:''
      }
     },  
     methods: {
         register(){
             if (email && nombre && password) {
                 
             }else{}
         }
     }
    /*data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }*/
  }
</script>
