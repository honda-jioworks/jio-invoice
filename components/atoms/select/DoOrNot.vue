<template>
  <v-select :items="items" :rules="rules" @input="checkBool" v-model="check" @change="scanSelect"></v-select>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({
  components: {},
})
export default class DoOrNot extends Vue {
  public items: Array<Object> = ['する', 'しない'];
  public rules: Array<object> = [(v: String) => !!v || '項目を選択してください']; //バリデーションチェック
  public check: string = '';
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

  @Emit()
  scanSelect() {
    return this.check;
  }
}
</script>
