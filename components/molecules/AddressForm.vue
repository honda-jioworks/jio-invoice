<template>
  <v-row>
    <v-col class="a2"> <v-text-field outlined></v-text-field> </v-col>
    <v-btn class="b2">地図を表示</v-btn>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({})
export default class AddressForm extends Vue {}
</script>
<style lang="scss" scoped>
.a2 {
  margin-left: 2%;
}
.b2 {
  padding-right: auto;
  margin-right: 490px;
  margin-top: 1%;
}
</style>
