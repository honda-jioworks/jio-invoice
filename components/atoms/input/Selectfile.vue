<template>
  <v-row justify="center">
    <v-col sm="5" md="5" lg="5" xl="5">
      <div v-if="Url">
        <img :src="Url" width="350px" />
      </div>
      <input
        type="file"
        ref="scanImgs"
        style="display: none"
        accept="image/*"
        label="画像ファイルから選択"
        prepend-icon="mdi-image"
        @change="uploadFile"
      />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Ref, Emit } from 'nuxt-property-decorator';

@Component({ components: {} })
export default class Selectfile extends Vue {
  public Url: string | undefined = '';
  files: any;
  value!: string;
  private test: any;

  //OfficeLogo,OfficeSealのRefで参照した際のクリックメゾット実行される
  remove() {
    this.Url = '';
  }

  @Ref()
  scanImgs!: Selectfile;

  //Refでこのコンポーネントのinputを参照し下記のメゾットを実行する
  selectimg() {
    this.scanImgs.click();
  }
  click() {
    throw new Error();
  }

  //アップロードされたfileの情報を取得している。
  uploadFile() {
    const file = this.scanImgs.files[0];
    this.Url = URL.createObjectURL(file);
    this.scanImgs.value = '';
  }

  //上のメゾットで取得した画像をダウンロードするメゾット。
  downloadByURL() {
    const file = document.createElement('a');
    file.download = this.files;
    file.href = this.Url!;
    file.click();
  }

  //@input="scanImg"
  // scanImg() {
  //   return this.image;
  // }
}
</script>

<style lang="scss" scoped>
.img {
  background-color: gray;
}
</style>
