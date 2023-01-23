<template>
  <div class="text-right">
    <v-row>
      <v-col cols="5" class="wrap16">給与支給日:</v-col>
      <v-col cols="4" class="wrap17"
        ><Date :rules="rule" :label="label" :selected.sync="salaryPaymentDate_in" :items="salaryPaymentDate_items"
      /></v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync } from 'nuxt-property-decorator';
import Date from '@/components/atoms/select/Date.vue';
@Component({ components: { Date } })
export default class SalaryPaymentDate extends Vue {
  @PropSync('salaryPaymentDate_val', { type: String })
  salaryPaymentDate_in!: string;

  @Prop()
  salaryPaymentDate_items!: Array<string>;

  label: string = '給与支給日';

  rule: Array<object> = [(v: String) => !!v || '項目を選択してください'];
}
</script>

<style lang="scss" scoped>
.wrap16 {
  margin-top: 15px;
}
.wrap17 {
  padding-left: -10px;
}
</style>
