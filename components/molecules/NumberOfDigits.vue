<template>
  <div>
    <v-row>
      <v-col cols="6" class="wrap011">数量の桁:</v-col>
      <v-col cols="6">
        <v-select :items="items" :rules="rules" outlined v-model="selectContents" @change="scanSelect"></v-select>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class NumberOfDigits extends Vue {
  public selectContents: string = '';
  public items: Array<string> = ['整数7桁 小数なし', '整数6桁 小数第1位', '整数5桁 小数第2位', '整数4桁 小数第3位'];
  public rules: Array<object> = [(v: String) => !!v || '項目を選択してください'];

  @Emit()
  scanSelect() {
    return this.selectContents;
  }
}
</script>
<style lang="scss" scoped>
.wrap011 {
  margin-top: 23px;
}
.v-select {
  margin-top: 11px;
  margin-right: 12px;
  margin-left: 9px;
}
</style>
