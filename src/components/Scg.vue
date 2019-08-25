<template>
<div>
    <b-container>
        <b-row class="pad-top"> 
            <b-col mt="2">
                <h4 class="text-center" for="">Find X, Y, Z Value</h4>
            </b-col>
        </b-row>
        <b-row class="pad-top"> 
            <b-col mb="12">
                <b-input-group  class="mb-1">
                    <b-form-input class="text-center" v-model="inp1"></b-form-input>
                    <b-form-input class="text-center" v-model="inp2" disabled></b-form-input>
                    <b-form-input class="text-center" v-model="inp3" disabled></b-form-input>
                    <b-form-input class="text-center" v-model="inp4" disabled></b-form-input>
                    <b-form-input class="text-center" v-model="inp5" disabled></b-form-input>
                    <b-form-input class="text-center" v-model="inp6"></b-form-input>
                    <b-form-input class="text-center" v-model="inp7"></b-form-input>
                </b-input-group>
            </b-col>
        </b-row>
        <b-row class="pad-top"> 
            <b-col mt="12">
                <center>
                    <b-button-group>
                        <b-button variant="success" v-on:click="answerData()">Find Value</b-button>
                        <b-button variant="info" v-on:click="cancelData()">Clear Value</b-button>
                    </b-button-group>
                </center>
            </b-col>
        </b-row>
        <b-row class="pad-top"> 
            <b-col mt="12">
                <center>
                    <b-button-group>
                        <b-form-textarea
                            id="textarea"
                            v-model="resultData"
                            rows="3"
                            max-rows="6"
                            ></b-form-textarea>
                    </b-button-group>
                </center>
            </b-col>
        </b-row>
    </b-container>
</div>

</template>

<script>
const axios = require('axios');
export default {
    name: 'Scg',
    mounted () {
        
    }, 
    methods: {
        answerData() {
            let newArr = [this.inp1, this.inp2, this.inp3, this.inp4, this.inp5, this.inp6, this.inp7],
            multiplyTerms = 2,
            result = {}
            newArr.forEach((val, key) => {
                if (isNaN(val)) {
                    let period
                    if (isNaN(newArr[key + 1])) {
                        period = (multiplyTerms * (key))
                        newArr[key] = newArr[key - 1] + period
                    } else {
                        period = (multiplyTerms * (key + 1))
                        newArr[key] = newArr[key + 1] - period
                    }
                    result[val] = newArr[key]
                } 	
            });
            this.resultData = JSON.stringify(result)
        },
        cancelData() {
            this.resultData = ''
        }
    }, 
    data() {
        return {
            inp1:'X'
            ,inp2:5
            ,inp3:9
            ,inp4:15
            ,inp5:23
            ,inp6:'Y'
            ,inp7:'Z'
            ,resultData: ''
        }
    }
};
</script>
<style>
.pad-top {
    padding-top: 10px !important;
    padding-bottom: 10px !important;
}
</style>