<template>
  <v-col
    class="d-flex"
  >
  <v-select 
    v-model="select"
    value="活性/非活性"
    :items="items"
    boolean disabled
    
  ></v-select>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({
  components: {},
  })
export default class DoOrNot extends Vue {
 items = ['する', 'しない'];
}
</script>