<template>
  <v-select :items="items" :rules="rules" v-model="selectContents" @change="scanSelect"></v-select>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({
  components: {},
})
export default class Rounding extends Vue {
  public selectContents: string = '';
  public items: Array<string> = ['切り上げ', '切り捨て', '四捨五入'];
  public rules: Array<object> = [(v: String) => !!v || '項目を選択してください'];

  @Emit()
  scanSelect() {
    return this.selectContents;
  }
}
</script>
