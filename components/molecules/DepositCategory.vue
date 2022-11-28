<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          ><v-select
            label="預金区分"
            :rules="selectRules"
            @change="testSelect"
            :items="contents"
            v-model="selectCheck"
          ></v-select
        ></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({})
export default class DepositCategory extends Vue {
  private selectCheck: string = '';
  private selectRules: Array<Object> = [(v: any) => !!v || '項目を選択してください'];
  private contents: Array<string> = [
    '普通預金',
    '当座預金',
    '定期預金',
    '定期積金',
    '通知預金',
    '別段預金',
    '郵便貯金',
    'その他',
  ];
  @Emit()
  testSelect() {
    return this.selectCheck;
  }
}
</script>
