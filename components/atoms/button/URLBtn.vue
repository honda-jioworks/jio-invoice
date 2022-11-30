<template>
  <v-btn @click="accessOfficeURL"> 開く </v-btn>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class URLBtn extends Vue {
  // データベースから受け取ったURL
  @Prop({ type: String })
  officeUrl!: string;
  // テキストボックスに入力されたURL
  @Prop({ type: String, required: true })
  urlValue!: string;
  // ページ読み込み時にデータベースから受け取ったURLをurlValueに代入
  created() {
    this.urlValue = this.officeUrl;
  }
  // ボタンが押された際に新しいページで受け取ったURLを検索
  @Emit()
  accessOfficeURL() {
    window.open(this.urlValue, Date());
  }
}
</script>
