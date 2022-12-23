<template>
  <v-row>
    <v-col class="e2">
      <v-text-field outlined label="＜会社名＞"></v-text-field>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class CorporationName extends Vue {}
</script>
<style lang="scss" scoped>
.v-text-field {
  margin-left: 2%;
  margin-right: 598px;
}
</style>
