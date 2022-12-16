<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <!--v-col cols="3"><TextBox /-->
          <v-text-field label="口座番号" :rules="textRules" v-model="textNumber" @input="scanNumber"></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
import TextBox from '@/components/atoms/TextBox.vue';
@Component({ components: { TextBox } })
export default class AccountNumber extends Vue {

  public textNumber: string = '';
  public textRules: Array<Object> = [

    (v: string) => !!v || '項目を入力してください',
    (v: string) => /^[+,-]?([1-9]\d*|0)$/.test(v) || '数値を入力してください',
  ];

  @Emit()
  scanNumber() {
    return this.textNumber;
  }
}
</script>
