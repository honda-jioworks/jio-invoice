<template>
  <v-container>
    <v-row>
      <v-col>
        <v-select :items="items" :rules="DepositRules" label="入金先" v-model="textName"></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit, PropSync, Prop } from 'nuxt-property-decorator';
@Component({})
export default class DepositAccount extends Vue {
  @PropSync('value', { type: String })
  textName!: any;
  @Prop()
  items!: Array<string>;
  DepositRules: Array<object> = [(v: string) => !!v || '項目を選択してください'];
}
</script>
