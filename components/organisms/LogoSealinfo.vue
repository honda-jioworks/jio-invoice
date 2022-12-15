<template>
  <v-row>
    <v-col>
      <v-sheet>
        <!-- ヘッダー -->
        <!-- コンテンツエリア -->
        <v-container fluid>
          <v-row>
            <v-col cols="12"
              ><OfficeLogo
                @logo-select="logoSelect"
                @logo-downlord="logoDownlord"
                @logo-remove-button="logoRemoveButton"
            /></v-col>
            <v-col cols="12"
              ><OfficeSeal
                @seal-select="sealSelect"
                @seal-remove-button="sealRemoveButton"
                @seal-downlord="sealDownlord"
            /></v-col>
          </v-row>
        </v-container>
        <!-- フッター -->
        <!-- ただし、全体のヘッダやフッタはlayouts側で作ってるため基本的にはコンテンツだけで大丈夫なはず -->
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'nuxt-property-decorator';
import Selectfile from '~/components/atoms/input/Selectfile.vue';
import OfficeLogo from '~/components/molecules/OfficeLogo.vue';
import OfficeSeal from '~/components/molecules/OfficeSeal.vue';

@Component({ components: { OfficeLogo, OfficeSeal, Selectfile } })
export default class LogoSealinfo extends Vue {
  private selectLogo: string = '';
  private removeLogo: string = '';
  private downloadLogo: string = '';
  private selectSeal: string = '';
  private removeSeal: string = '';
  private downloadSeal: string = '';

  logoSelect(val: string): void {
    this.selectLogo = val;
  }

  logoRemoveButton(val: string): void {
    this.removeLogo = val;
  }

  logoDownlord(val: string): void {
    this.downloadLogo = val;
  }

  sealSelect(val: string): void {
    this.selectSeal = val;
  }

  sealRemoveButton(val: string): void {
    this.removeSeal = val;
  }

  sealDownlord(val: string): void {
    this.downloadSeal = val;
  }
}
</script>
<style lang="scss" scoped></style>
