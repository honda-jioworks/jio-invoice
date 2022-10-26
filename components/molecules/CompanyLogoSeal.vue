<template>
    <v-sheet rounded>
        <v-contaner>
            <v-row > 
                <v-col cols="12"><OfficeLogo/><Selectfile id="OfficeLogo"/></v-col>
                <v-col cols="12" ><clearbutton greet="hello"  id="DeleteOfficeLogo" action="クリア"/></v-col>  
                <v-col cols="12 " depressed elevation="5" rounded color="#909090"><ImgImport/></v-col>
            </v-row > 
            <v-row >
                <v-col cols="12"><CompanySeal/><Selectfile id="CompanySeal" /></v-col>
                <v-col cols="12"><CreateCompanySeal/></v-col>
                <v-col cols="12"><clearbutton id="DeleteCompanySeal" action="クリア"/></v-col>
                <v-col cols="12"><ImgImport/></v-col>
            </v-row > 
        </v-contaner>
    </v-sheet>
</template>





<script lang="ts">
import {Vue,Component} from 'nuxt-property-decorator'
import OfficeLogo from'@/components/atoms/label/OfficeLogo.vue'
import Selectfile from '@/components/atoms/imput/Selectfile.vue'
import CompanySeal from '../atoms/label/CompanySeal.vue';
import clearbutton from '../atoms/button/clearbutton.vue';
import ImgImport from '../atoms/button/imgImport.vue';
import CreateCompanySeal from '../atoms/button/CreateCompanySeal.vue';
@Component({components:{OfficeLogo, Selectfile,clearbutton,CompanySeal,ImgImport,CreateCompanySeal}})
export default class CompanyLogoSeal extends Vue {










}
    


</script>

<style lang="scss" scoped>
label,button{
    display: inline-block;
    align-items: center;
    width: 150px;
}

</style>

<HTMLInputElement></HTMLInputElement>