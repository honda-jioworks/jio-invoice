<template>
  <div>
    <v-text-field :value="textUrl" @input="scanTest"> </v-text-field>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class URLBox extends Vue {
  private textUrl: string = 'https://jioworks.com';

  created(): void {
    this.scanUrl('');
  }

  @Emit()
  scanUrl(_: string): string {
    return this.textUrl;
  }

  @Emit()
  scanTest(url: string): string {
    return url;
  }
}
</script>
<style lang="scss">
.textField {
  color: red;
}
</style>
