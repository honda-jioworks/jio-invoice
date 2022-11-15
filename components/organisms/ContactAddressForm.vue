<template>
  <v-sheet>
    <div><PostalCode /></div>
    <div><AddressInput /></div>
    <div><DepartmentInput /></div>
    <div><PostBox /></div>
    <div><HonorificBox /></div>
    <div><PhoneNumber /></div>
    <div><EmailInput /></div>
    <div><TelNumber /></div>
    <div><FaxNumber /></div>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import PostalCode from '~/components/molecules/PostalCode.vue';
import AddressInput from '@/components/molecules/AddressInput.vue';
import DepartmentInput from '@/components/molecules/DepartmentInput.vue';
import PostBox from '@/components/molecules/PostBox.vue';
import HonorificBox from '@/components/molecules/HonorificBox.vue';
import PhoneNumber from '@/components/molecules/PhoneNumber.vue';
import EmailInput from '@/components/molecules/EmailInput.vue';
import TelNumber from '@/components/molecules/TelNumber.vue';
import FaxNumber from '@/components/molecules/FaxNumber.vue';

@Component({
  components: {
    PostalCode,
    AddressInput,
    DepartmentInput,
    PostBox,
    HonorificBox,
    PhoneNumber,
    EmailInput,
    TelNumber,
    FaxNumber,
  },
})
export default class CustomerRegisterForm extends Vue {
  // 登録処理など記述していくのか？
}
</script>
