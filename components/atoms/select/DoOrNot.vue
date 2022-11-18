<template>
  <v-col>
    <v-select :items="items" :rules="rules" outlined @input="checkBool" v-model="check"></v-select>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({
  components: {},
})
export default class DoOrNot extends Vue {
  private items: Array<Object> = ['する', 'しない'];
  private rules: Array<object> = [(v: String) => !!v || '項目を選択してください']; //バリデーションチェック
  private check = '';
  @Emit()
  checkBool(): boolean {
    if (this.check == 'する') {
      return true;
    } else if (this.check == 'しない') {
      return false;
    } else {
      return false;
    }
  }
}
</script>
