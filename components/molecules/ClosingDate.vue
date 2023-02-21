<template>
  <v-container>
    <v-row>
      <v-col class="d-flex">
        <v-select
          :items="items"
          label="締日（毎月）"
          :rules="boxRules"
          @change="sendShimebi"
          v-model="textName"
          @blur="input"
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';

@Component({})
export default class ClosingDate extends Vue {
  textName: string = '';
  items = Array.from({ length: 28 }, (_, i) => `${i + 1}日`).concat('末日');

  boxRules: Array<any> = [(v: object) => !!v || '項目を選択してください'];

  @Emit()
  sendShimebi() {
    return this.textName;
  }
  input() {
    this.$store.commit('customer/set', { deposit: this.textName });
  }
}
</script>
