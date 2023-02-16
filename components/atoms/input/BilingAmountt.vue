<template>
  <div>
    <v-row>
      <v-col>
        <v-subheader>請求額</v-subheader>
        <v-col @change="inputAmount"> &yen;{{ totalAmount }} </v-col>
      </v-col>
      <v-col>
        <v-subheader>消費税等</v-subheader>
        <v-col @change="TaxAmount"> &yen;{{ taxAmount }} </v-col>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({ components: {} })
export default class BilingAmountt extends Vue {
  inputAmout() {}
}
</script>
<style lang="scss" scoped>
.v-subheader {
  background-color: rgb(56, 129, 255);
  color: white;
  justify-content: center;
}
.v-divider {
  color: white;
}
.q1 {
  margin-left: 2%;
}
</style>
