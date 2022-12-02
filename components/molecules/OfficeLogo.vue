<template>
  <div>
    <v-sheet rounded>
      <v-row>
        <v-col cols="12"><OfficeLogoName /></v-col>
        <div class="wrap">
          <v-col cols="12"><Selectfile id="OfficeLogo" ref="SelectImg" /></v-col>
          <div>
            <v-col cols="12"
              ><SelectImgbutton selectimgbutton="画像を選択してください" @click-select="clickSelect"
            /></v-col>
            <v-col cols="12"><Clearbutton id="DeleteOfficeLogo" action="クリア" @remove-button="removeButton" /></v-col>
            <v-col cols="12 "
              ><ImgImport depressed elevation="5" rounded color="#909090" @img-downlord="imgDownlord"
            /></v-col>
          </div>
        </div>
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
  @Ref()
  SelectImg!: Selectfile;

  removeButton() {
    this.SelectImg.remove();
  }

  imgDownlord() {
    this.SelectImg.downloadByURL();
  }

  clickSelect(): void {
    this.SelectImg.selectimg();
  }
}
</script>

<style lang="scss" scoped>
.btn {
  align-items: flex-end;
}
.wrap {
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
}
.wrap img {
  width: 30%;
}
.wrap div {
  width: 40%;
}
</style>
