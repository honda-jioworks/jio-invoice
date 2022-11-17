<template>
  <v-select
    :items="SelectBox"
    :rules="selectRules"
    label="区分"
    required
  ></v-select>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({})
export default class DivisionName extends Vue {
  SelectBox: Array<string> = [
    '役員',
    '従業員',
    '派遣',
    'バイト',];

  selectRules: Array<object> = [
     (v:string) => !!v || '選択してください'
  ];
};
</script>