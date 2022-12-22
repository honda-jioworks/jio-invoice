<template>
  <v-text-field :rules="nameRules" :value="name" @input="scanName"> </v-text-field>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class CEONameTextBox extends Vue {
  nameRules: Array<object> = [(v: string) => !!v || '項目を入力してください'];
  private name: string = '';
  // ページ表示時にscanNameメソッドを実行
  created(): void {
    this.scanName('');
  }

  scanName(val: string): void {
    if (val == '') {
      this.name = '横田　龍介';
    } else {
      this.name = val;
    }
  }
}
</script>
<style lang="scss" scoped>
.v-text-field {
  width: 100%;
}
</style>
