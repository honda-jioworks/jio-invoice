<template>
  <v-sheet rounded>
    <v-row>
      <v-col cols="12"><OfficeLogoName /></v-col>
    </v-row>
    <v-row>
      <div class="wrap">
        <v-col cols="12"
          ><Selectfile ref="SelectImg" :value.sync="selectFile" :field="'select_logo'" v-model="select_logo"
        /></v-col>
        <div>
          <v-col cols="12"
            ><SelectImgbutton selectimgbutton="画像を選択してください" @click-select="logoSelect"
          /></v-col>
          <v-col cols="12"
            ><Clearbutton id="DeleteOfficeLogo" action="クリア" @remove-button="logoRemoveButton"
          /></v-col>
          <v-col cols="12"
            ><ImgImport depressed elevation="5" rounded color="#909090" @img-downlord="logoDownlord"
          /></v-col>
        </div>
      </div>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Ref, PropSync, Emit } from 'nuxt-property-decorator';
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
  select_logo: any = '';

  @Ref()
  SelectImg!: Selectfile;

  @PropSync('selectFile_val', { type: String })
  selectFile!: any;

  @Emit()
  logoSelect() {
    return this.SelectImg.selectimg();
  }
  @Emit()
  logoRemoveButton() {
    return this.SelectImg.remove();
  }

  @Emit()
  logoDownlord() {
    return this.SelectImg.downloadByURL();
  }
}
</script>

<style lang="scss" scoped>
.btn {
  align-items: flex-end;
}
.wrap {
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
}
.wrap39 {
  margin-right: 700px;
}

.wrap img {
  width: 30%;
}
.wrap div {
  width: 40%;
}
</style>
