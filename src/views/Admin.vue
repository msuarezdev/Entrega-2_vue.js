<template>
    <div>
        <navbar-admin />
        <b-container class="mt-4" fluid>
            <b-table :busy="busy" bordered :fields="fields" hover :items="items">
                <template v-slot:cell(products)="data">
                <h5>ID: {{data.item.id}} </h5>
                    <ul v-for="(product,index) in data.item.products" :key="index" >
                        <li>Nombre: {{product.nomnbre}}</li>
                        <li>Precio: {{product.precio}}</li>
                        <li>Cantidad: {{product.cantidad}}</li>
                        <hr>
                    </ul>
                </template>
                <template v-slot:cell(delete)="data">
                    <b-button @click="deletesale(data.item.id)" block class="mt-4" style="top:50%!important;" size="lg"
                    variant="danger">
                    Eliminar Venta
                    </b-button>
                </template>
                <template v-slot:table-busy>
                    <div class="tex-center text-success my-2">
                        <b-spinner class="aling-middle"> </b-spinner>
                        <strong>Cargando...</strong>
                    </div>
                </template>
            </b-table>

        </b-container>
    </div>
</template>

<script>
/*import {db} from "@/firebase";*/
import NavbarAdmin from "@/components/navbar-admin";
//import {querySnapshot}  from "@firebase/firestore";
export default{
    data() {
        return{
            data: "",
            busy:true,
            items:[],
            fields:[
                {key: "products", label:"Sales"},
                {key: "total", label:"Total"},
                {key: "delete", label:"Delete"}
            ]
        };
    },
    components: {
        NavbarAdmin
    },
    created(){
        db.collection("vue").onSnapshot(querySnapshot =>{
            this.items=[]
            this.buys=true
            querySnapshot.forEach(doc =>{
                const doc2= doc.data();
                doc2.id= doc.id;
                this.items.push(doc2);
            })
            if (this.items.length){
            this.busy=false
            }else{
            this.busy=false
            }
        })
    },
    methods: {
        deletesale(id){
            db.collection("vue").doc(id).delete().then(function(){

            })
        }
    }
};
</script>
