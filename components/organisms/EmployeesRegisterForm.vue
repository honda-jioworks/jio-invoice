<template>
  <v-sheet class="pageback">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <BirthDate />
          <EnterCompanyDate />
          <RetiredCompanyDate />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import BirthDate from '../molecules/BirthDate.vue';
import EnterCompanyDate from '../molecules/EnterCompanyDate.vue';
import RetiredCompanyDate from '../molecules/RetiredCompanyDate.vue';

@Component({
  components: { BirthDate, EnterCompanyDate, RetiredCompanyDate },
})
export default class EmployeesRegisterForm extends Vue {}
</script>
