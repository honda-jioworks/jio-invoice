<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <!--v-col cols="3"><TextBox /-->
          <v-text-field label="口座番号" @blur="input" :rules="textRules" v-model="textNumber"></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit, PropSync } from 'nuxt-property-decorator';
import TextBox from '@/components/atoms/TextBox.vue';
@Component({ components: { TextBox } })
export default class AccountNumber extends Vue {
  @PropSync('value', { type: String })
  textNumber!: any;
  public textRules: Array<Object> = [
    (v: string) => !!v || '項目を入力してください',
    (v: string) => /^[+,-]?([1-9]\d*|0)$/.test(v) || '数値を入力してください',
  ];
  input() {
    this.$store.commit('company/set', { accountnumber: this.textNumber });
  }
}
</script>
