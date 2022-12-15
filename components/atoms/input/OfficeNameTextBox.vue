<template>
  <v-text-field value="株式会社jioworks"> </v-text-field>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class OfficeNameTextBox extends Vue {}
</script>
<style lang="scss" scoped>
.v-text-field {
  width: 100%;
}
</style>
