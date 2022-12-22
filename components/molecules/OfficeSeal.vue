<template>
  <v-sheet rounded>
    <v-row>
      <v-col cols="12"><CompanySeal /></v-col>
    </v-row>
    <v-row>
      <div class="wrap">
        <v-col cols="12" xl="6"><Selectfile ref="SelectImg" /></v-col>
        <div>
          <v-col cols="12"
            ><SelectImgbutton selectimgbutton="画像を選択してください" @click-select="sealSelect"
          /></v-col>
          <v-col cols="12"
            ><Clearbutton id="DeleteCompanySeal" action="クリア" @remove-button="sealRemoveButton"
          /></v-col>
          <v-col cols="12"
            ><ImgImport depressed elevation="5" rounded color="#909090" @img-downlord="sealDownlord"
          /></v-col>
        </div>
      </div>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component, Ref, Prop, Emit } from 'nuxt-property-decorator';
import Selectfile from '~/components/atoms/input/Selectfile.vue';
import CompanySeal from '../atoms/label/CompanySeal.vue';
import Clearbutton from '../atoms/button/clearbutton.vue';
import ImgImport from '../atoms/button/imgImport.vue';
import CreateCompanySeal from '../atoms/button/CreateCompanySeal.vue';
import SelectImgbutton from '../atoms/button/SelectImgbutton.vue';

@Component({
  components: { Selectfile, Clearbutton, CompanySeal, ImgImport, CreateCompanySeal, SelectImgbutton },
})
export default class OfficeSeal extends Vue {
  //RefしてAtomsのクリックイベントを実行している
  @Ref()
  SelectImg!: Selectfile;

  @Emit()
  sealSelect() {
    return this.SelectImg.selectimg();
  }

  @Emit()
  sealRemoveButton() {
    return this.SelectImg.remove();
  }
  @Emit()
  sealDownlord() {
    return this.SelectImg.downloadByURL();
  }

  createSeal() {
    window.open('../molecules/OfficeSealPanel.vue', 'subwin', 'width=750,height=750');
  }
}
</script>

<style lang="scss" scoped>
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
