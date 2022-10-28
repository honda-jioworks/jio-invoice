<template>
  <v-col class="d-flex">
    <v-select :items="items" outlined></v-select>
  </v-col>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component({
  components: {},
})
export default class Date extends Vue {
  items = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '19',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '末',
  ];
}
</script>

<!--script>
import { Vue, Component } from 'nuxt-property-decorator';
@Component({
  components: {},
  })
export default class Date extends Vue {
  data() {
    const maxDate = 28;
    const dateRange = [...Array(maxDate).keys()].map(i => ++i);
    dateRange.push("末");
  return {
    items: dateRange,
    date: "",
    };
  }
};
</script-->
