<template>
  <v-sheet>
    <input
      type="file"
      ref="input"
      style="display: none"
      accept=""
      :value="files"
      @input="scanFile"
      @change="selectedFile"
    />
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Prop, Ref, Emit } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class FileRefer extends Vue {
  private isUploading: boolean | undefined;
  public files!: any;
  private file: any;
  value!: string;
  @Ref()
  input!: FileRefer;

  //参照された際にbtnclickが実行され、上のinputをRefで参照しクリックイベントを実行する。
  btnclick() {
    this.input.click();
  }
  click() {
    throw new Error();
  }
  selectedFile() {
    const file = this.input.files[0];
    this.input.value = '';
  }
  //inputで選択したFileの名前をEmitしてFileLocationのFileReferに渡している
  @Emit()
  scanFile(): string {
    return this.input.files[0].name;
  }
}
</script>
