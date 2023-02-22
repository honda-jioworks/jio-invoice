<template>
  <v-app>
    <v-container>
      <div>
        <v-row no-gutters>
          <v-col cols="12"><v-subheader class="w1 mb-0 pb-0">請　 求　 書</v-subheader></v-col>
        </v-row>
        <v-row>
          <v-col cols="6" class="mb-4">
            <v-row no-gutters>
              <v-col cols="7"> <v-text-field class="text-h4" /> </v-col>
              <v-col cols="3"><v-subheader class="text-h4 mt-1 pt-2">御中</v-subheader> </v-col>
              <v-spacer />
            </v-row>
          </v-col>
          <v-spacer />
          <v-col cols="6" class="pt-0 mt-0">
            <v-row no-gutters>
              <v-col cols="7" />
              <v-col cols="1"><v-subheader>No</v-subheader></v-col>
              <v-col cols="4" class="pt-0 mt-1"> <v-text-field rounded dense reverse class="w4" /></v-col>
              <v-col cols="6" class="mt-0 pt-0" /><v-col cols="2"><v-subheader>請求日</v-subheader></v-col>
              <v-col cols="4" class="mt-1"><v-text-field rounded dense /></v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="6">
            <v-card tile elevation="0">
              <v-card-text outlined>下記の通り、ご請求申し上げます。</v-card-text>
              <v-row no-gutters>
                <v-col cols="4">
                  <v-card dark tile>
                    <v-card-text dense class="text-center"> 件名 </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="8"><v-card-text>サンプルプロジェクト</v-card-text></v-col>
                <v-col cols="4">
                  <v-card dark tile>
                    <v-card-text class="text-center"> 支払い期限 </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="8"><v-card-text>2022/05/31</v-card-text></v-col>
                <v-col cols="4">
                  <v-card dark tile>
                    <v-card-text class="text-center">振込み </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="8"><v-card-text>サンプル銀行 本店 普通</v-card-text></v-col>
                <v-col cols="4" class="text-center">
                  <v-card dark tile>
                    <v-card-text>d</v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="8"><v-card-text>サンプル(カ</v-card-text></v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card tile elevation="0">
              <v-row no-gutters>
                <v-spacer />
                <v-col cols="6"><v-card-text> サンプル株式会社</v-card-text></v-col>
                <v-spacer />
              </v-row>
              <v-row no-gutters>
                <v-spacer />
                <v-col cols="6"><v-card-text>〒100-0011</v-card-text></v-col>
                <v-spacer />
              </v-row>
              <v-row no-gutters>
                <v-spacer />
                <v-col cols="6"><v-card-text>東京都千代田区千代田1-1-1</v-card-text></v-col>
                <v-spacer />
              </v-row>
              <v-row no-gutters>
                <v-spacer />
                <v-col cols="6"><v-card-text>サンプルビル3階</v-card-text></v-col>
                <v-spacer />
              </v-row>
              <v-row no-gutters>
                <v-spacer />
                <v-col cols="6"><v-card-text>TEL : 03-0000-0000</v-card-text></v-col>
                <v-spacer />
              </v-row>
              <v-row no-gutters>
                <v-spacer />
                <v-col cols="6"><v-card-text>担当 : サンプル太郎</v-card-text></v-col>
                <v-spacer />
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="2">
            <v-card dark tile><v-card-text class="text-center">合計</v-card-text></v-card>
          </v-col>
          <v-col cols="5"
            ><v-card outlined elevation="0"><v-card-text class="text-center">金額</v-card-text></v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-data-table
              :headers="headers"
              :items="items"
              :items-per-page="10"
              dense
              class="elevation-1"
              hide-default-footer
            >
              <template v-slot:[`item.quanitity_val`]="props">
                <QuanitityEditer :quanitity_val.sync="props.item.quanitity_val" />
              </template>
              <template v-slot:[`item.unit_val`]="props">
                <UnitEditer :unit_val.sync="props.item.unit_val" :unit_items="unit_items" />
              </template>
              <template v-slot:[`item.unitprice_val`]="props">
                <UnitPriceEditer :unitprice_val.sync="props.item.unitprice_val" />
              </template>
              <template v-slot:[`item.amount_val`]="props">
                <AmountEditer :amount_val.sync="props.item.amount_val" />
              </template>
            </v-data-table>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-app>
</template>
<script lang="ts">
import { Vue, Component, Watch, Emit } from 'nuxt-property-decorator';
import QuanitityEditer from '@/components/molecules/QuanitityEditer.vue';
import UnitEditer from '@/components/molecules/UnitEditer.vue';
import UnitPriceEditer from '@/components/molecules/UnitPriceEditer.vue';
import AmountEditer from '@/components/molecules/AmountEditer.vue';
import axios from 'axios';
import { NuxtAxiosInstance } from '@nuxtjs/axios';
@Component({
  components: { QuanitityEditer, UnitEditer, UnitPriceEditer, AmountEditer },
})
export default class PdfPreview extends Vue {
  // Organismsはセクションコンテンツ（それ単体で一区切りとなるコンテンツ）
  unit_items: Array<string> = ['人月', '印月', '日', '時間', '人時', '名', '式', 'ヶ月', 'ページ'];

  headers = [
    {
      text: '摘要',
      value: 'summary_val',
      align: 'center',
      width: '35%',
      sortable: false,
      class: 'black white--text',
      divider: true,
    },
    {
      text: '数量',
      value: 'quanitity_val',
      align: 'center',
      width: '15%',
      class: 'black white--text',
      divider: true,
    },
    {
      text: '単位',
      value: 'unit_val',
      align: 'center',
      width: '8%',
      class: 'black white--text',
      divider: true,
    },
    { text: '単価', value: 'unitprice_val', width: '15%', align: 'center', class: 'black white--text', divider: true },
    { text: '金額', value: 'amount_val', align: 'center', width: '15%', class: 'black white--text', divider: true },
  ];

  items = [
    { summary_val: 'サンプル1', quanitity_val: '1', unit_val: '', unitprice_val: '', amount_val: '' },
    { summary_val: 'サンプル2', quanitity_val: '1', unit_val: '', unitprice_val: '', amount_val: '' },
    { summary_val: 'サンプル3', quanitity_val: '1', unit_val: '', unitprice_val: '', amount_val: '' },
    { summary_val: 'サンプル4', quanitity_val: '1', unit_val: '', unitprice_val: '', amount_val: '' },
    { summary_val: 'サンプル5', quanitity_val: '1', unit_val: '', unitprice_val: '', amount_val: '' },
    { summary_val: 'サンプル6', quanitity_val: '1', unit_val: '', unitprice_val: '', amount_val: '' },
    { summary_val: 'サンプル7', quanitity_val: '1', unit_val: '', unitprice_val: '', amount_val: '' },
    { summary_val: 'サンプル8', quanitity_val: '1', unit_val: '', unitprice_val: '', amount_val: '' },
    { summary_val: 'サンプル9', quanitity_val: '1', unit_val: '', unitprice_val: '', amount_val: '' },
    { summary_val: 'サンプル10', quanitity_val: '1', unit_val: '', unitprice_val: '', amount_val: '' },
  ];
  aton_rule: Array<object> = [(v: any) => !!v || '単位を選択してください。'];

  editedIndex = -1;

  readonly axios = require('axios');
  onSave() {
    console.log(this.$store.state.company);
    axios.post('/test', {
      responsible_id: this.$store.state.CompanyAllInfomation.responsible_id,
    });
  }
}
</script>
<style lang="scss" scoped>
.w1 {
  padding: auto, auto, auto, auto;
  margin: auto, auto, auto, auto;
  font-size: 200%;
  justify-content: center;
}
.w2 {
  padding: auto, auto, auto, auto;
  margin: auto, auto, auto, auto;
  font-size: 200%;
}
.w3 {
  font-size: 200%;
  color: #ffd700;
}
</style>
