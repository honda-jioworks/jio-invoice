<template>
   <v-sheet>
    <v-row no-gutters class="hidden-sm-and-up">
      <v-col cols="4"><PostalCodeLabel /></v-col> <!--xsの時だけ-->
      <v-col cols=“3”><ThreeNumbersTextBox /></v-col> <!--xsの時だけ-->
      <v-col cols=“3”><FourNumbersTextBox /></v-col> <!--xsの時だけ-->
      <v-col cols=“2”></v-col> <!--xsの時だけ-->
    </v-row>
    <v-row no-gutters class="d-none d-sm-flex d-md-none">
      <v-col cols="4"><PostalCodeLabel /></v-col> <!--smの時だけ-->
      <v-col cols=“2”><ThreeNumbersTextBox /></v-col> <!--smの時だけ-->
      <v-col cols=“2”><FourNumbersTextBox /></v-col> <!--smの時だけ-->
      <v-col cols=“4”><AddressSearch /></v-col> <!--smの時だけ-->  
    </v-row>
    <v-row no-gutters class="hidden-sm-and-down">
    <v-col cols="4"><PostalCodeLabel /></v-col> <!--md以上の時だけ-->
    <v-col cols=“2”><ThreeNumbersTextBox /></v-col> <!--md以上の時だけ-->
    <v-col cols=“2”><FourNumbersTextBox /></v-col> <!--md以上の時だけ-->
    <v-col cols="3"><AddressSearch /></v-col> <!--md以上の時だけ-->
    <v-col cols=“1” class="d-none"></v-col>
    </v-row>
    <v-row align-content="center">
      <v-col cols="12" class="d-block d-sm-none" align="center"><AddressSearch /></v-col> <!--xsの時だけ-->
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import PostalCodeLabel from '~/components/atoms/label/PostalCodeLabel.vue';
import ThreeNumbersTextBox from '~/components/atoms/input/ThreeNumbersTextBox.vue';
import FourNumbersTextBox from '~/components/atoms/input/FourNumbersTextBox.vue';
import AddressSearch from '~/components/atoms/button/AddressSearch.vue';
@Component({
  components: {
    PostalCodeLabel,
    ThreeNumbersTextBox,
    FourNumbersTextBox,
    AddressSearch,
  },
})
export default class DashBoard extends Vue {}
</script>

< style lang="scss">
</style>
