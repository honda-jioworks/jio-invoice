<template>
  <div>
    <v-text-field v-model="textVal" dense @blur="changeText"> </v-text-field>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class URLBox extends Vue {
  private textVal = 'https://jioworks.com/';

  created(): void {
    this.changeText('');
  }

  @Emit()
  changeText(_: string): string {
    return this.textVal;
  }
}
</script>
