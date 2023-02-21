<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field :rules="nameRules" @blur="input" label="自社担当者" v-model="textShort"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit, PropSync } from 'nuxt-property-decorator';
@Component({
  components: {},
})
export default class ResponsiblePerson extends Vue {
  @PropSync('value', { type: String })
  textShort!: any;
  nameRules: Array<object> = [(v: string) => !!v || '自社担当者を入力してください。'];
  input() {
    this.$store.commit('customer/set', { responsible: this.textShort });
  }
}
</script>
