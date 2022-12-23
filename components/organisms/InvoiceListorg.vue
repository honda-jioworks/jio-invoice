
<template>
<v-row>
  <v-col> 
    <Sortbtn/><Register /><Fixbtn/><Deleat/><JumpCalendar/><CustomerSelect/><copy/>
    </v-col>
  </v-row>


</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Register from '@/components/molecuels/Register.vue';
import Fixbtn from '@/components/molecuels/Fixbtn.vue';
import Deleat from '@/components/molecuels/Deleat.vue';
import Sortbtn from '@/components/molecuels/Sortbtn.vue';
import Copy from '@/components/molecuels/Copy.vue';
import JumpCalendar from '~/components/molecuels/Calendar.vue';
import CustomerSelect from '@/components/molecuels/CustomerSelect.vue';


@Component({ components: { Register,Fixbtn,Deleat,Sortbtn, Copy, JumpCalendar, CustomerSelect}})
export default class InvoiceList extends Vue {
}
</script>