
<template>
<v-row>
  <v-col> 
    <Sortbtn/>
    <Register />
    <Fixbtn/>
    <Deleat/>
    <JumpCalendar/>
    <CustomerSelect/>
    <CopyItmen/>
    <SerectTime/>
    <SearchPage/>
    </v-col>
  </v-row>


</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Register from '@/components/molecuels/Register.vue';
import Fixbtn from '@/components/molecuels/Fixbtn.vue';
import Deleat from '@/components/molecuels/Deleat.vue';
import Sortbtn from '@/components/molecuels/Sortbtn.vue';
import CopyItmen from '~/components/molecuels/CopyItmen.vue';
import JumpCalendar from '~/components/molecuels/Calendar.vue';
import CustomerSelect from '@/components/molecuels/CustomerSelect.vue';
import SerectTime from '@/components/molecuels/SerectTime.vue';
import SearchPage from '@/components/molecuels/SearchPage.vue';


@Component({ components: { Register,Fixbtn,Deleat,Sortbtn, CopyItmen, JumpCalendar, CustomerSelect,SerectTime,SearchPage}})
export default class InvoiceList extends Vue {
}
</script>