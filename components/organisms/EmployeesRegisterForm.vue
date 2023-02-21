<template>
  <v-sheet class="groundwork">
    <v-row>
      <v-col cols="12">
        <EmployeeName />
        <EmployeeNameKana />
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import EmployeeName from '../molecules/EmployeeName.vue';
import EmployeeNameKana from '../molecules/EmployeeNameKana.vue';

@Component({
  components: {
    EmployeeName,
    EmployeeNameKana,
  },
})
export default class EmployeesRegisterForm extends Vue {}
</script>
