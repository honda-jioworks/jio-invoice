<template>
  <v-subheader :rules="nameRules">TEL:</v-subheader>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class TelLabel extends Vue {
  nameRules: Array<object> = [
    (v: string) => !!v || '項目を入力してください',
    (v: string) => /^[+,-]?([1-9]\d*|0)$/ || '数値を入力してください',
  ];
}
</script>
