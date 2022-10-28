<template>
  <div>
    <v-row>
      <v-col cols="6">税率:</v-col>
      <v-col cols="6">
        <v-select :items="items" outlined></v-select>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class TaxRate extends Vue {
  public items = ['平成24年まで', '平成25年以降'];
}
</script>
