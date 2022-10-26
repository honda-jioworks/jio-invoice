<template>
  <v-row justify="center">
    <v-col sm="5" md="5" lg="5" xl="5">
      <img :src="url" width="200px">
      <v-file-input
     v-model="image"
     accept="image/*"
     label="画像ファイルから選択"
     prepend-icon="mdi-image"
     />
    </v-col>
  </v-row>
</template>

<script lang="ts">
 import { Vue, Component,Prop } from 'nuxt-property-decorator';

 @Component({components: { },})

 
export default class clearbutton extends Vue {

  @Prop()
      public image = null;

  get url(): string | undefined{
      if(this.image===null){return;}
      else{return URL.createObjectURL(this.image);}
    }
  }

</script>