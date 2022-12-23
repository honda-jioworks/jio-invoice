<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field :rules="nameRules" label="得意先名(カナ)" v-model="textKana" @input="scanKana"> </v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({
  components: {},
})
export default class CustomerNameKana extends Vue {
  nameRules: Array<object> = [(v: string) => !!v || '得意先名(カナ)を入力してください。'];
  public textKana: string = '';
  @Emit()
  scanKana(): string {
    return this.textKana;
  }
}
</script>
