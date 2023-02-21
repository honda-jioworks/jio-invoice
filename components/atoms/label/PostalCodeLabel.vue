<template>
  <div class="d1">
    <v-subheader>郵便番号：</v-subheader>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class PostalCodeLabel extends Vue {}
</script>
<style lang="scss" scoped>
.v-subheader {
  padding-left: auto;
  padding-right: auto;
}
</style>
