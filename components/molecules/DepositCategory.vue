<template>
  <div>
    <v-container>
      <v-row>
        <v-col><v-select label="預金区分" :rules="selectRules" :items="items" v-model="selectCheck"></v-select></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit, PropSync, Prop } from 'nuxt-property-decorator';
@Component({})
export default class DepositCategory extends Vue {
  @PropSync('value', { type: String })
  selectCheck!: any;
  @Prop()
  items!: Array<string>;
  public selectRules: Array<Object> = [(v: any) => !!v || '項目を選択してください'];
}
</script>
