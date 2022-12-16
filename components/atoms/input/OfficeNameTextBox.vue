<template>
  <v-text-field :value="officeName" :rules="nameRules"> </v-text-field>
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
