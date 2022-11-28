<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <!--TextBox :name="label" label="金融機関名" /-->
          <v-text-field
            label="金融機関名"
            :rules="textRules"
            v-model="textFinancialname"
            @input="scanFinancialname"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class FinancialInstitutionName extends Vue {
  private textRules: Array<Object> = [(v: any) => !!v || '項目を入力してください'];
  private textFinancialname: string = '';

  @Emit()
  scanFinancialname(): string {
    return this.textFinancialname;
  }
}
</script>
