<template>
  <v-text-field :value="name" @input="scanName"> </v-text-field>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class CEONameTextBox extends Vue {
  private name: string = '';

  @Prop({ type: String, default: '' })
  type!: string;

  created(): void {
    this.scanName('');
  }

  scanName(val: string): void {
    if (val == '') {
      this.name = '横田　龍介';
    } else {
      this.name = val;
    }
  }
}
</script>
<style lang="scss" scoped>
.textbox {
  border: 2px solid black;
}
.v-text-field {
  width: 100%;
}
</style>
