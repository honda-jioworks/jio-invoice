<template>
  <v-row no-gutter>
    <v-col cols="12" class="w1">
      <v-text-field dense type="date" clearable outlined :rules="rules">
        <template v-slot:label>回収日<span style="color: red"> *</span></template>
      </v-text-field> </v-col>
  </v-row>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({ components: {} })
export default class CollectionDate extends Vue {
  rules: Array<object> = [(v: any) => !!v || '選択してください'];
}
</script>
<style lang="scss" scoped>
.w1 {
  margin-right: 10%;
}
</style>
