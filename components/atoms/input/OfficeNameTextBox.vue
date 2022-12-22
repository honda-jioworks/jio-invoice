<template>
  <v-text-field :rules="nameRules" :value="officeName"> </v-text-field>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class OfficeNameTextBox extends Vue {
  nameRules: Array<object> = [(v: string) => !!v || '項目を入力してください'];
  @Prop({ type: String })
  officeName!: string;
}
</script>
<style lang="scss" scoped>
.v-text-field {
  width: 100%;
}
</style>
