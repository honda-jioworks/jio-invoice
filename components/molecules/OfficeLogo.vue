<template>
  <div>
    <v-sheet rounded>
      <v-row>
        <v-col cols="12"><OfficeLogoName /><Selectfile id="OfficeLogo" ref="SelectImg" @scan-imgs="scanImgs" /></v-col>
        <v-col cols="12"
          ><SelectImgbutton selectimgbutton="画像を選択してください" @scan-img="scanImg" :urlValue="imgVal"
        /></v-col>
        <v-col cols="12"><Clearbutton id="DeleteOfficeLogo" action="クリア" /></v-col>
        <v-col cols="12 " depressed elevation="5" rounded color="#909090"><ImgImport /></v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Ref, Prop, Emit } from 'nuxt-property-decorator';
import OfficeLogoName from '~/components/atoms/label/OfficeLogoName.vue';
import Selectfile from '~/components/atoms/input/Selectfile.vue';
import CompanySeal from '../atoms/label/CompanySeal.vue';
import Clearbutton from '../atoms/button/clearbutton.vue';
import ImgImport from '../atoms/button/imgImport.vue';
import CreateCompanySeal from '../atoms/button/CreateCompanySeal.vue';
import SelectImgbutton from '../atoms/button/SelectImgbutton.vue';
@Component({
  components: { OfficeLogoName, Selectfile, Clearbutton, CompanySeal, ImgImport, CreateCompanySeal, SelectImgbutton },
})
export default class OfficeLogo extends Vue {
  private imgVal = '';

  @Ref()
  SelectImg!: Selectfile;

  scanImg() {
    this.SelectImg.Url;
  }

  scanImgs() {
    this.imgVal;
  }
}
</script>

<style lang="scss" scoped>
.btn {
  align-items: flex-end;
}
</style>
