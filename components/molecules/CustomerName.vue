<template>
  <v-container>
    <v-row>
      <v-col cols="10" sm="10" md="10" lg="10" xl="10">
        <v-text-field :rules="nameRules" @blur="input" label="得意先名" v-model="value_in"> </v-text-field>
      </v-col>
      <v-col align-self="auto" cols="2" md="2" sm="2" lg="2" xl="2">
        <v-btn>会社を検索</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit, PropSync } from 'nuxt-property-decorator';
@Component({
  components: {},
})
export default class CustomerName extends Vue {
  @PropSync('value', { type: String })
  value_in!: any;
  nameRules: Array<object> = [(v: string) => !!v || '得意先名を入力してください。'];
  public textName: string = '';
  input() {
    this.$store.commit('customer/set', { customer: this.value_in });
  }
}
</script>
