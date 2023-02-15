<template>
  <v-row justify="center">
    <v-col sm="5" md="5" lg="12" xl="5">
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
        @blur="input"
      />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Ref, Prop } from 'nuxt-property-decorator';

@Component({ components: {} })
export default class Selectfile extends Vue {
  @Prop()
  value!: any;

  @Prop({ type: String, required: true })
  field!: any;

  public Url: any = '';
  files: any = '';
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
    this.files = file.name;
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

  input() {
    switch (this.field) {
      case 'select_logo':
        this.$store.commit('company/set', { select_logo: this.Url });
        break;
      case 'select_seal':
        this.$store.commit('company/set', { select_seal: this.Url });
        break;
    }
  }
}
</script>

<style lang="scss" scoped>
.img {
  background-color: gray;
}
</style>
