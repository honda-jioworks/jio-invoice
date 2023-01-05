<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field :rules="nameRules" label="部署" v-model="department" @input="getDepartment"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator';
@Component({})
export default class DepartmentInput extends Vue {
  nameRules: Array<object> = [(v: string) => !!v || '部署名を入力してください'];
  department: string = '';

  @Emit()
  getDepartment() {
    return this.department;
  }
}
</script>
