<template>
  <v-select v-model="selected_in" :items="items" :rules="rule" :label="label"></v-select>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync } from 'nuxt-property-decorator';
@Component({
  components: {},
})
export default class Rounding extends Vue {
  @PropSync('selected', { type: String })
  selected_in!: string;

  @Prop()
  items!: Array<string>;

  @Prop()
  label!: string;

  @Prop()
  rule!: Array<object>;
}
</script>
