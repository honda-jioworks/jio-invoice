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

  //受け取ったクリックイベントを実行し、RefでSelectFileを参照、SelectFileのbtnclickを実行する
  btnClick() {
    this.SelectFile.btnclick();
  }
  //受け取ったFileの名前をEmitでさらにCompanyInformationへ渡す。
  @Emit()
  scanFile(fileName: any) {
    return fileName;
  }
}
</script>
