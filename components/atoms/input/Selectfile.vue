<template>
  <v-row justify="center">
    <v-col sm="5" md="5" lg="5" xl="5">
      <img :src="Url" width="200px" />
      <v-file-input
        v-model="image"
        @input="scanImgs"
        accept="image/*"
        label="画像ファイルから選択"
        prepend-icon="mdi-image"
      />

      <!-- <v-btn @click="remove">remove</v-btn> -->
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator';

@Component({ components: {} })
export default class Selectfile extends Vue {
  public image = null;

  get Url(): string | undefined {
    if (this.image === null) {
      return;
    } else {
      return URL.createObjectURL(this.image);
    }
  }

  @Emit()
  scanImgs() {
    return this.Url;
  }

  //@input="scanImg"
  // scanImg() {
  //   return this.image;
  // }
}
</script>
