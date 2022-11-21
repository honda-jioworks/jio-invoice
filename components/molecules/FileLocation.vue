<template>
  <v-sheet>
    <v-row>
      <FileLocationLabel />
      <SelectFileBtn @btn-click="btnClick" btnName="参照" />
      <FileRefer ref="SelectFile" @scan-file="scanFile" />
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Ref, Emit } from 'nuxt-property-decorator';
import FileLocationLabel from '~/components/atoms/label/FileLocationLabel.vue';
import FileRefer from '~/components/atoms/input/FileRefer.vue';
import SelectFileBtn from '../atoms/button/SelectFileBtn.vue';

@Component({
  components: {
    FileLocationLabel,
    FileRefer,
    SelectFileBtn,
  },
})
export default class FileLocation extends Vue {
  @Ref()
  SelectFile!: FileRefer;

  btnClick() {
    this.SelectFile.btnclick();
  }
  @Emit()
  scanFile(fileName: any) {
    return fileName;
  }
}
</script>
