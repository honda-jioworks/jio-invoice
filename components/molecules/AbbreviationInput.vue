<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-text-field :rules="nameRules" label="略称" v-model="textShort" @input="scanShort"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({
  components: {},
})
export default class AbbreviatationInput extends Vue {
  nameRules: Array<object> = [(v: string) => !!v || '得意先名(略称)を入力してください。'];
  private textShort: string = '';
  @Emit()
  scanShort() {
    return this.textShort;
  }
}
</script>
