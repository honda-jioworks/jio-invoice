<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="10" sm="5" lg="3">
          <!--TextBox :name="label" label="金融機関名" /-->
          <v-text-field label="金融機関名" :rules="textRules" outlined></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({ components: {} })
export default class FinancialInstitutionName extends Vue {
  private textRules: Array<Object> = [(v: any) => !!v || '項目を入力してください'];

  private label: string = '金融機関名';
}
</script>
