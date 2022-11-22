<template>
  <v-container class="color">
    <!--1行目-->
    <v-row>
      <v-col cols="12" sm="6" md="6" lg="6" xl="6">
        <!--得意先名-->
        <CustomerName />
      </v-col>
      <v-spacer />
    </v-row>
    <!--2行目-->
    <v-row>
      <v-col cols="12" sm="5" md="6" lg="5" xl="5">
        <CustomerNameKana class="mt-n10" /><!--氏名とカナの行間詰め-->
      </v-col>
      <!--得意先名(カナ)-->
      <v-spacer />
    </v-row>
    <!--3行目-->
    <v-row>
      <v-col cols="12" sm="4" md="4" lg="4" xl="4">
        <!--略称-->
        <AbbreviationInput class="mt-n5" />
      </v-col>
      <v-col cols="12" sm="4" md="4" lg="4" xl="4">
        <!--検索キー1-->
        <PrimarySearchInput class="mt-n5" />
      </v-col>
      <v-col cols="12" sm="4" md="4" lg="4" xl="4">
        <!--検索キー2-->
        <SecondSearchInput class="mt-n5" />
      </v-col>
    </v-row>
    <!--4行目-->
    <v-row>
      <v-col cols="12" sm="4" md="4" lg="5" xl="5">
        <!--メモ-->
        <MemoBox class="mt-n5" />
      </v-col>
      <v-spacer />
    </v-row>
    <!--5行目-->
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="12" xl="12">
        <!--入力候補に表示しない-->
        <NotShowBox class="mt-n5" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
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
export default class BasicInfomationForm extends Vue {}
</script>

<style lang="scss" scoped>
.color {
  background: white;
}
</style>
