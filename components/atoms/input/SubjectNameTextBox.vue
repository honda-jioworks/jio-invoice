<template>
    <v-text-field :rules="rules" :disabled="!checkVal"></v-text-field>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
@Component({
  components: {},
})
export default class TextBox extends Vue {
  private val: boolean = false;

  @Prop({ type: Boolean })
  checkVal!: boolean;

  private rules: Array<object> = [
    (v: String) => !!v || '項目を入力してください',
    //(v: String) => v.length <= 25 || 'Max 25 characters',
  ];
}
</script>
