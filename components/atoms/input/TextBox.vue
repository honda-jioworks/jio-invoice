<template>
  <div>
    <v-text-field :value="textVal" @input="changeText" @blur="changeText" :class="textStyle"> </v-text-field>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class URLBox extends Vue {
  private textVal = this.initialVal;

  @Prop({ type: String, required: true })
  type!: string;

  created(): void {
    this.changeText('');
  }

  @Emit()
  changeText(_: string): string {
    return this.textVal;
  }

  get textStyle(): string {
    switch (this.type) {
      case 'textField':
        return 'textField';
      case 'numberField':
        return 'numberField';
      default:
        return '';
    }
  }

  get initialVal(): string {
    switch (this.type) {
      case 'URL':
        return 'https://jioworks.com';
      default:
        return '';
    }
  }

  clickMe(): void {
    console.log('俺が山崎か。。。？');
  }
}
</script>
<style lang="scss">
.textField {
  color: red;
}
</style>
