<template>
<div>
    <b-container>
        <b-row class="pad-top"> 
            <b-col mt="2">
                <h4 class="text-center" for="">Find Restaurant</h4>
            </b-col>
        </b-row>
         <b-row class="pad-top"> 
            <b-col mt="12">
                <b-table striped hover :items="listResturant" :fields="listResturantRead"></b-table>
            </b-col>
        </b-row>
    </b-container>
</div>

</template>

<script>
const axios = require('axios');
export default {
    name: 'location',
    mounted () {
        this.getLocation()
    }, 
    methods: {
        getLocation() {
            var config = {
              headers: {"Access-Control-Allow-Origin": "*"}
            };
            axios.get('http://localhost:8081/bundan', config).then((response) => {
                console.log(response.data.result)
                this.listResturant = response.data.result
            })
        }
    }, 
    data() {
        return {
            msg: 'Location',
            listResturant: [],
            listResturantRead: {
                order: {
                    label: 'No.',
                    sortable: true
                },
                name: {
                    label: 'Name',
                    sortable: true
                },
                lat: {
                    label: 'Latitude',
                    sortable: true
                },
                lng: {
                    label: 'Longtitude',
                    sortable: true
                },
            }
        }
    }
};
</script>
<style>
.pad-top {
    padding-top: 10px !important;
}
</style>