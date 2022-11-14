<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="10" sm="5" lg="3">
          <!--v-col cols="3"><TextBox /-->
          <v-text-field label="口座番号" :rules="textRules" outlined></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import TextBox from '@/components/atoms/TextBox.vue';
@Component({ components: { TextBox } })
export default class AccountNumber extends Vue {
  private textRules: Array<Object> = [(v: any) => !!v || '項目を入力してください'];
}
</script>
