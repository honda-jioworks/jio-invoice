<template>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="3">
        <v-select
          label="自社担当者"
          :items="employees"
          :rules="boxRules"
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
  employees: Array<string> = [
    '横田龍介', 
    '岩間良一',
    '本夛寛', 
    '立木悠貴',
    '石井健太', 
    '飯倉豊', 
    '植木規子', 
    '斎藤仁美', 
    '角田健一', 
    '矢島智夏', 
    '宮田大地', 
  ];
  boxRules: Array<object> = [(v: object) => !!v || '項目を選択してください'];
  employee: string = '';

  @Emit()
  getEmployee(employee: string): string {
    return employee;
  }
}
</script>
