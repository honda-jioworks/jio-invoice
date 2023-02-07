<template>
  <div class="text-right">
    <v-row>
      <v-col cols="6" class="wrap011">数量の桁:</v-col>
      <v-col cols="6">
        <v-select
          :items="numberOfDigits_items"
          :rules="rule"
          v-model="numberOfDigits_in"
          @blur="input"
          :label="label"
        ></v-select>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class NumberOfDigits extends Vue {
  @PropSync('numberOfDigits_val', { type: String })
  numberOfDigits_in!: string;

  @Prop()
  numberOfDigits_items!: Array<string>;

  label: string = '数量の桁';

  rule: Array<object> = [(v: String) => !!v || '項目を選択してください'];

  input() {
    this.$store.commit('company/set', { numberOfDigitsVal: this.numberOfDigits_in });
  }
}
</script>
<style lang="scss" scoped>
.wrap011 {
  margin-top: 15px;
}
.v-select {
  margin-left: 5px;
  margin-top: 10px;
}
</style>
