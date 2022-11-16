<template>
  <div>
    <v-sheet rounded>
      <v-row>
        <v-col cols="12"><CompanySeal /><Selectfile id="CompanySeal" /></v-col>
        <v-col cols="12"><SelectImgbutton selectimgbutton="画像を選択してください" /></v-col>
        <v-col cols="12"><CreateCompanySeal /></v-col>
        <v-col cols="12"><Clearbutton id="DeleteCompanySeal" action="クリア" /></v-col>
        <v-col cols="12"><ImgImport /></v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Ref, Prop } from 'nuxt-property-decorator';
import Selectfile from '~/components/atoms/input/Selectfile.vue';
import CompanySeal from '../atoms/label/CompanySeal.vue';
import Clearbutton from '../atoms/button/clearbutton.vue';
import ImgImport from '../atoms/button/imgImport.vue';
import CreateCompanySeal from '../atoms/button/CreateCompanySeal.vue';
import SelectImgbutton from '../atoms/button/SelectImgbutton.vue';
@Component({
  components: { Selectfile, Clearbutton, CompanySeal, ImgImport, CreateCompanySeal, SelectImgbutton },
})
export default class OfficeSeal extends Vue {}
</script>

<style lang="scss" scoped>
.btn {
  align-items: flex-end;
}
</style>
