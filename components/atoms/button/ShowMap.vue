<template>
  <v-btn @click="showMaptest"> 地図を表示 </v-btn>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class ShowMap extends Vue {
  // 入力された郵便番号をもとに生成された住所情報
  @Prop({ type: String })
  newAddress!: string;
  // 郵便番号の前3桁
  @Prop({ type: String })
  postalCode1!: string;
  // 郵便番号の後ろ4桁
  @Prop({ type: String })
  postalCode2!: string;
  // データベースから受け取った住所情報の前半部分
  @Prop({ type: String })
  address1!: string;
  // 郵便番号と住所情報をもとにGoogleマップで地図を検索
  @Emit()
  showMaptest() {
    window.open(
      'https://www.google.com/maps/search/〒' + this.postalCode1 + '-' + this.postalCode2 + this.newAddress + '/',
      'subwin',
      'width=750,height=750'
    );
  }
}
</script>
