<template>
  <div>
    <v-sheet rounded>
      <v-row>
        <v-col cols="12"><OfficeLogo /><Selectfile @scan-img="scanImg" id="OfficeLogo" /></v-col>

        <v-col cols="12"><Clearbutton id="DeleteOfficeLogo" action="クリア" :clearbutton="imgVal" /></v-col>
        <v-col cols="12 " depressed elevation="5" rounded color="#909090"><ImgImport /></v-col>

        <v-col cols="12"><CompanySeal /><Selectfile id="CompanySeal" /></v-col>

        <v-col cols="12"><CreateCompanySeal /></v-col>
        <v-col cols="12"><Clearbutton id="DeleteCompanySeal" action="クリア" /></v-col>
        <v-col cols="12"><ImgImport /></v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Ref, Prop } from 'nuxt-property-decorator';
import OfficeLogo from '@/components/atoms/label/OfficeLogo.vue';
import Selectfile from '@/components/atoms/imput/Selectfile.vue';
import CompanySeal from '../atoms/label/CompanySeal.vue';
import Clearbutton from '../atoms/button/clearbutton.vue';
import ImgImport from '../atoms/button/imgImport.vue';
import CreateCompanySeal from '../atoms/button/CreateCompanySeal.vue';
@Component({ components: { OfficeLogo, Selectfile, Clearbutton, CompanySeal, ImgImport, CreateCompanySeal } })
export default class CompanyLogoSeal extends Vue {
  private imgVal = '';

  scanImg(val: string): void {
    this.imgVal = val;
  }
}
</script>

<style lang="scss" scoped>
.btn {
  align-items: flex-end;
}
</style>
