<template>
  <v-container class="color" :items="desserts">
    <!--1行目-->
    <v-row>
      <v-col cols="6">
        <!--得意先名-->
        <CustomerName v-for="item in desserts" :key="item.customer_id" :value.sync="item.customer" />
      </v-col>
      <v-spacer />
    </v-row>
    <!--2行目-->
    <v-row>
      <v-col cols="5">
        <CustomerNameKana
          v-for="item in desserts"
          :key="item.nameKana_id"
          :value.sync="item.nameKana"
          class="mt-n10"
        /><!--氏名とカナの行間詰め-->
      </v-col>
      <!--得意先名(カナ)-->
      <v-spacer />
    </v-row>
    <!--3行目-->
    <v-row>
      <v-col cols="4">
        <!--略称-->
        <AbbreviationInput
          v-for="item in desserts"
          :key="item.textShort_id"
          :value.sync="item.textShort"
          class="mt-n5"
        />
      </v-col>
      <v-col cols="4">
        <!--検索キー1-->
        <PrimarySearchInput class="mt-n5" />
      </v-col>
      <v-col cols="4">
        <!--検索キー2-->
        <SecondSearchInput class="mt-n5" />
      </v-col>
    </v-row>
    <!--4行目-->
    <v-row>
      <v-col cols="5">
        <MemoBox v-for="item in desserts" :key="item.textMemo_id" :value.sync="item.textmemo" class="mt-n5" />
      </v-col>
    </v-row>
    <!--5行目-->
    <v-row>
      <v-col cols="12">
        <NotShowBox v-for="item in desserts" :key="item.check_id" :value.sync="item.check" class="mt-n5" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
import CustomerName from '@/components/molecules/CustomerName.vue';
import CustomerNameKana from '@/components/molecules/CustomerNameKana.vue';
import AbbreviationInput from '~/components/molecules/AbbreviationInput.vue';
import PrimarySearchInput from '@/components/molecules/PrimarySearchInput.vue';
import SecondSearchInput from '@/components/molecules/SecondSearchInput.vue';
import MemoBox from '@/components/molecules/MemoBox.vue';
import NotShowBox from '~/components/molecules/NotShowBox.vue';
@Component({
  components: {
    CustomerName,
    CustomerNameKana,
    AbbreviationInput,
    PrimarySearchInput,
    SecondSearchInput,
    MemoBox,
    NotShowBox,
  },
})
export default class BasicInfomationForm extends Vue {
  desserts = [
    {
      customer_id: '',
      customer: '',
      nameKana_id: '',
      nameKana: '',
      textShort_id: '',
      textShort: '',
      textMemo_id: '',
      textmemo: '',
      check_id: '',
      check: '',
    },
  ];
  public customer: string = '';
  public nameVal: string = '';
  public kanaVal: string = '';
  public shortVal: string = '';
  public primaryVal: string = '';
  public secondVal: string = '';
  public memoVal: string = '';
  public checkVal: boolean = false;
}
</script>
<style lang="scss" scoped>
.color {
  background: white;
}
</style>
