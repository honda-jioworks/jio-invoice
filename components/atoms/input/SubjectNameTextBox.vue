<template>
  <v-text-field :rules="rules" :disabled="!checkVal" v-model="textContents" @input="scanText"></v-text-field>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator';
@Component({
  components: {},
})
export default class TextBox extends Vue {
  private val: boolean = false;
  public textContents: string = '';

  @Prop({ type: Boolean })
  checkVal!: boolean;

  public rules: Array<object> = [
    (v: String) => !!v || '項目を入力してください',
    //(v: String) => v.length <= 25 || 'Max 25 characters',
  ];

  @Emit()
  scanText() {
    return this.textContents;
  }
}
</script>
<style lang="scss" scoped>
.v-text-field {
  margin-top: 9px;

  margin-left: 4px;
}
</style>
