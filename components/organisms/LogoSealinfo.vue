<template>
  <!-- ヘッダー -->
  <!-- コンテンツエリア -->
  <v-sheet>
    <v-container :items="desserts">
      <v-row>
        <v-col cols="12"
          ><OfficeLogo v-for="item in desserts" :key="item.logo_id" :selectFile_val.sync="item.selectFile" /></v-col
      ></v-row>
      <v-row>
        <v-col cols="12"
          ><OfficeSeal v-for="item in desserts" :key="item.seal_id" :selectFile_val.sync="item.select_seal" /></v-col
      ></v-row>
    </v-container>
  </v-sheet>
  <!-- フッター -->
  <!-- ただし、全体のヘッダやフッタはlayouts側で作ってるため基本的にはコンテンツだけで大丈夫なはず -->
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import OfficeLogo from '~/components/molecules/OfficeLogo.vue';
import OfficeSeal from '~/components/molecules/OfficeSeal.vue';

@Component({ components: { OfficeLogo, OfficeSeal } })
export default class LogoSealinfo extends Vue {
  @Prop()
  desserts = [
    {
      logo_id: 'logo_id',
      select_logo: '',
      seal_id: 'seal_id',
      select_seal: '',
    },
  ];
}
</script>
<style lang="scss" scoped>
.groundwork {
  background-color: gray;
}
</style>
