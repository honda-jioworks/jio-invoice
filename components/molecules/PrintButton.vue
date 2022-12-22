<template>
    <v-btn @click="onPrint">印刷</v-btn>
</template>

  <script lang="ts">
  import { Vue, Component} from 'nuxt-property-decorator';
  @Component({ })
  export default class PrintButton extends Vue {
    onPrint(){
    let result = window.confirm("印刷画面に移動しますか?")
    if(result){
      window.open();
    }
  }
 }
</script>