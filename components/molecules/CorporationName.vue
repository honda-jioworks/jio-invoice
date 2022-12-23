<template>
  <v-row>
    <v-col class="e2">
      <v-text-field v-model="corp" outlined @input="scanCorp" label="会社名"></v-text-field>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class CorporationName extends Vue {
  corp: string = '';

  @Emit()
  scanCorp(): string {
    return this.corp;
  }
}
</script>
<style lang="scss" scoped>
.v-text-field {
  margin-left: 2%;
  margin-right: 598px;
}
</style>
