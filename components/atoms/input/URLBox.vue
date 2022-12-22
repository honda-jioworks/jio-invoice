<template>
  <div>
    <v-text-field :rules="nameRules" :value="officeUrl" @input="scanUrl"> </v-text-field>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class URLBox extends Vue {
  nameRules: Array<object> = [
    (v: string) => !!v || '項目を入力してください',
    (v: string) => /^(ftp|http|https):\/\/[^ "]+$/.test(v) || 'URLを入力してください',
  ];
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
