<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field :rules="nameRules" @blur="input" label="得意先名(カナ)" v-model="textKana"> </v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit, PropSync } from 'nuxt-property-decorator';
@Component({
  components: {},
})
export default class CustomerNameKana extends Vue {
  @PropSync('value', { type: String })
  textKana: any;
  nameRules: Array<object> = [(v: string) => !!v || '得意先名(カナ)を入力してください。'];
  input() {
    this.$store.commit('customer/set', { nameKana: this.textKana });
  }
}
</script>
