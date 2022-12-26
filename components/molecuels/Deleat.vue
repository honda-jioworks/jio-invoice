<template>
<v-row>
  <v-col>  
    <v-sheet
  color="white"
  height="35"
  width="60"
>
    <v-btn text @click="deleat">削除</v-btn>
    </v-sheet>
    </v-col>
    </v-row>


</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({})
export default class Deleat extends Vue {

   deleat(): void {
    let result = window.confirm("本当に削除しますか？")
    if( result==true ){
    console.log('削除しました')
    }else{
      console.log('キャンセルしました')
    }
  }
}
</script>