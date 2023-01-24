<template>
  <!-- ヘッダー -->
  <!-- コンテンツエリア -->
  <v-sheet>
    <v-container>
      <v-row>
        <v-col cols="12"
          ><OfficeLogo
            @logo-select="logoSelect"
            @logo-downlord="logoDownlord"
            @logo-remove-button="logoRemoveButton" /></v-col
      ></v-row>
      <v-row>
        <v-col cols="12"
          ><OfficeSeal
            @seal-select="sealSelect"
            @seal-remove-button="sealRemoveButton"
            @seal-downlord="sealDownlord" /></v-col
      ></v-row>
    </v-container>
  </v-sheet>

  <!-- フッター -->
  <!-- ただし、全体のヘッダやフッタはlayouts側で作ってるため基本的にはコンテンツだけで大丈夫なはず -->
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'nuxt-property-decorator';
import Selectfile from '~/components/atoms/input/Selectfile.vue';
import OfficeLogo from '~/components/molecules/OfficeLogo.vue';
import OfficeSeal from '~/components/molecules/OfficeSeal.vue';

@Component({ components: { OfficeLogo, OfficeSeal, Selectfile } })
export default class LogoSealinfo extends Vue {
  private selectLogo: any = '';
  private removeLogo: any = '';
  private downloadLogo: any = '';
  private selectSeal: any = '';
  private removeSeal: any = '';
  private downloadSeal: any = '';

  logoSelect(val: any): void {
    this.selectLogo = val;
  }

  logoRemoveButton(val: any): void {
    this.removeLogo = val;
  }

  logoDownlord(val: any): void {
    this.downloadLogo = val;
  }

  sealSelect(val: any): void {
    this.selectSeal = val;
  }

  sealRemoveButton(val: any): void {
    this.removeSeal = val;
  }

  sealDownlord(val: any): void {
    this.downloadSeal = val;
  }

  value3() {
    alert(
      this.selectLogo + this.removeLogo + this.downloadLogo + this.selectSeal + this.removeSeal + this.downloadSeal
    );
  }
}
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: gray;
}
</style>
