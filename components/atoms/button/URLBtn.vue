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
  // ボタンが押された際に新しいページで受け取ったURLを検索
  @Emit()
  accessOfficeURL() {
    window.open(this.officeUrl, Date());
  }
}
</script>
