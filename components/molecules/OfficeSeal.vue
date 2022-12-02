<template>
  <div>
    <v-sheet rounded>
      <v-row>
        <v-col cols="12"><CompanySeal /></v-col>
        <div class="wrap">
          <v-col cols="12"><Selectfile ref="SelectImg" id="CompanySeal" /></v-col>
          <div>
            <v-col cols="12"
              ><SelectImgbutton selectimgbutton="画像を選択してください" @click-select="clickSelect"
            /></v-col>
            <!-- <v-col cols="12"><CreateCompanySeal @create-seal="createSeal" /></v-col> -->
            <v-col cols="12"
              ><Clearbutton id="DeleteCompanySeal" action="クリア" @remove-button="removeButton"
            /></v-col>
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
export default class OfficeSeal extends Vue {
  //RefしてAtomsのクリックイベントを実行している
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

  createSeal() {
    window.open('../molecules/OfficeSealPanel.vue', 'subwin', 'width=750,height=750');
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

.wrap div {
  width: 40%;
}
.wrap div button {
  display: block;
  width: 60%;
  line-height: 32px;
  margin: 28px 20px;
}
</style>
