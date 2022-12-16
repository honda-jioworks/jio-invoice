<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="5">
        <v-text-field :rules="nameRules" label="得意先名" v-model="textName" @input="scanName"> </v-text-field>
      </v-col>
      <v-btn small>会社を検索</v-btn>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({
  components: {},
})
export default class CustomerName extends Vue {
  nameRules: Array<object> = [(v: string) => !!v || '得意先名を入力してください。'];
  public textName: string = '';
  @Emit()
  scanName(_: string): string {
    return this.textName;
  }
}
</script>
