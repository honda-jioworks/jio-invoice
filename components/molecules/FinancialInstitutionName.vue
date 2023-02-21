<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <!--TextBox :name="label" label="金融機関名" /-->
          <v-text-field label="金融機関名" @blur="input" :rules="textRules" v-model="textFinancialname"></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit, PropSync } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class FinancialInstitutionName extends Vue {
  @PropSync('value', { type: String })
  textFinancialname!: any;
  public textRules: Array<Object> = [(v: any) => !!v || '項目を入力してください'];
  input() {
    this.$store.commit('customer/set', { financialname: this.textFinancialname });
  }
}
</script>
