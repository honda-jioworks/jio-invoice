<template>
  <div>
    <v-text-field :value="officeUrl" @input="scanUrl"> </v-text-field>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class URLBox extends Vue {
  // データベースから受け取ったURL
  @Prop({ type: String })
  officeUrl!: string;
  // 入力されたURLをmoleculesに送る
  @Emit()
  scanUrl(url: string): string {
    return url;
  }
}
</script>
<style lang="scss">
.textField {
  color: red;
}
</style>
