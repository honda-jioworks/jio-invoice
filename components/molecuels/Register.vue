<template>
<v-row>
  <v-col> 

   <v-btn text @click="open">新規</v-btn>
   
  </v-col>
  </v-row>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({})
export default class Register extends Vue {

   open(): void {
    let result = window.confirm("一覧ページへ移動します。よろしいですか?")
    if( result ){
      location.href ="/";
    }
  }
  
}

</script>
