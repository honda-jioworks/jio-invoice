<template>
  <v-sheet class="groundwork">
    <v-row>
      <v-col cols="12">
        <CustomerName />
        <CustomerNameKana />
        <AbbreviationInput />
        <PrimarySearchInput />
        <SecondSearchInput />
        <MemoBox />
        <NotShowBox />
      </v-col>
    </v-row>
  </v-sheet>
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
.groundwork {
  background-color: white;
}
</style>
