<template>
<div class="paragraph00" id="summarize">
  <v-app>
    <v-form ref="form">
    <v-container fluid>
      <v-row>
        <v-col cols="12" >
          <div class="paragraph1" id="dis">
            <v-checkbox 
            v-model="pushCheckbox" dense
            label="適格請求書発行事業者の登録通知を受けた"
            color="red">
            </v-checkbox>   
          </div>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="3" dense>
          <div class="paragraph2">
            <subhedder>登録番号:</subhedder>
          </div>
        </v-col>
        <v-col cols="1" dense >
          <div class="paragraph3">
            <label>T</label>              
          </div>
        </v-col>
        <v-col cols="8" dense >
          <div class="paragraph4">
             <v-text-field outlined dense hide-details  color="bkack" 
             v-bind:disabled="isPush" @clikc="pushCheckbox()"></v-text-field>
          </div> 
        </v-col>  
      </v-row>
    </v-container>
    </v-form>
  </v-app>
</div>
</template>



<script>
import { Vue, Component, } from 'nuxt-property-decorator'
import DashBoard from '@/components/templates/DashBoard.vue'
@Component({ components: {}})
export default class customerRegister extends Vue {
      }
</script>



<style lang="scss" scoped>
.paragraph1{
  padding-bottom:auto;
  padding-top:auto;
  padding-right:auto;
  padding-left:95px;
  margin:10px  380px 15px 200px; 
  border: 2px solid #f93;
}.paragraph2{
  margin-top: 7px;
  margin-left:auto;
  width:90px;
  padding-left:22px;
}.paragraph3{
  margin-top: 7px;
  margin-right:auto;
  margin-left:auto;
  width:1px;
  padding-left:50px;
}.paragraph4{
  margin-right:auto;
  width:330px;
}</style>
