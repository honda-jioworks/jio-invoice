<template>
  <v-container class="color">
    <!--1行目-->
    <v-row>
      <v-col cols="12" sm="4" md="4" lg="4" xl="4">
        <!--郵便番号-->
        <PostalCode />
      </v-col>
      <v-spacer />
    </v-row>
    <!--2行目-->
    <v-row>
      <v-col cols="12" sm="6" md="6" lg="6" xl="6">
        <!--住所-->
        <AddressInput class="mt-n10" />
        <!--郵便番号と住所の行間詰め-->
      </v-col>
      <v-spacer />
    </v-row>
    <!--3行目-->
    <v-row>
      <v-col cols="6" sm="6" md="6" lg="3" xl="3">
        <!--役職-->
        <PostBox class="mt-n5" />
      </v-col>
      <v-col cols="6" sm="6" md="6" lg="3" xl="3">
        <!--部署-->
        <DepartmentInput class="mt-n5" />
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6" xl="6">
        <!--担当者名-->
        <HonorificBox class="mt-n5" />
      </v-col>
      <v-spacer />
    </v-row>
    <!--4行目-->
    <v-row>
      <v-col cols="12" sm="6" md="6" lg="6" xl="6">
        <!--担当者携帯-->
        <PhoneNumber class="mt-n5" />
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6" xl="6">
        <!--担当者メール-->
        <EmailInput class="mt-n5" />
      </v-col>
    </v-row>
    <!--5行目-->
    <v-row>
      <v-col cols="12" sm="6" md="6" lg="6" xl="6">
        <!--TEL-->
        <TelNumberBox class="mt-n5" />
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6" xl="6">
        <!--FAX-->
        <FaxNumberBox class="mt-n5" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import PostalCode from '@/components/molecules/PostalCode.vue';
import AddressInput from '@/components/molecules/AddressInput.vue';
import DepartmentInput from '@/components/molecules/DepartmentInput.vue';
import PostBox from '@/components/molecules/PostBox.vue';
import HonorificBox from '@/components/molecules/HonorificBox.vue';
import PhoneNumber from '@/components/molecules/PhoneNumber.vue';
import EmailInput from '@/components/molecules/EmailInput.vue';
import TelNumberBox from '@/components/molecules/TelNumberBox.vue';
import FaxNumberBox from '@/components/molecules/FaxNumberBox.vue';

@Component({
  components: {
    PostalCode,
    AddressInput,
    DepartmentInput,
    PostBox,
    HonorificBox,
    PhoneNumber,
    EmailInput,
    TelNumberBox,
    FaxNumberBox,
  },
})
export default class CustomerRegisterForm extends Vue {
  // 登録処理など記述していくのか？
}
</script>
<style lang="scss" scoped>
.color {
  background: white;
}
</style>
