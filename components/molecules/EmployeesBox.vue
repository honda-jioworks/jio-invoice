<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="3">
        <v-select
          label="自社担当者"
          :items="items"
          :rules="boxRules"
          item-text="employee"
          item-value="employeeCode"
          @change="getEmployee"
          return-object
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({})
export default class EmployeesBox extends Vue {
  items: Array<object> = [
    { employee: '横田龍介', employeeCode: 1 },
    { employee: '岩間良一', employeeCode: 2 },
    { employee: '本夛寛', employeeCode: 3 },
    { employee: '立木悠貴', employeeCode: 4 },
    { employee: '斎藤賢司', employeeCode: 5 },
    { employee: '石井健太', employeeCode: 6 },
    { employee: '飯倉豊', employeeCode: 7 },
    { employee: '植木規子', employeeCode: 8 },
    { employee: '斎藤仁美', employeeCode: 9 },
    { employee: '角田健一', employeeCode: 10 },
    { employee: '矢島智夏', employeeCode: 11 },
    { employee: '宮田大地', employeeCode: 12 },
  ];
  boxRules: Array<object> = [(v: object) => !!v || '項目を選択してください'];
  employee: any = '';

  @Emit()
  getEmployee(employee: any): any {
    return employee;
  }
}
</script>
