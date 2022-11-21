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
import { file } from '@babel/types';
import { Vue, Component, Prop, Ref, Emit } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class FileRefer extends Vue {
  private isUploading: boolean | undefined;
  public files!: any;
  value!: string;

  @Ref()
  input!: FileRefer;

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

  @Emit()
  scanFile(): string {
    return this.input.files[0].name;
  }
}
</script>
