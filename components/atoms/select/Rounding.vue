<template>
  <v-col>
    <v-select :items="items" dense outlined :rules="rules" v-model="selectContents" @change="scanSelect"></v-select>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({
  components: {},
})
export default class Rounding extends Vue {
  public selectContents: string = '';
  private items: Array<string> = ['切り上げ', '切り捨て', '四捨五入'];
  private rules: Array<object> = [(v: String) => !!v || '項目を選択してください'];

  @Emit()
  scanSelect() {
    return this.selectContents;
  }
}
</script>
