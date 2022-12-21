
<template>
<v-row>
  <v-col> 
    <Sortbtn/><Register /><Fixbtn/><Deleat/><Copy/><Print/>
    </v-col>
  </v-row>


</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Register from '@/components/molecuels/Register.vue';
import Fixbtn from '@/components/molecuels/Fixbtn.vue';
import Deleat from '@/components/molecuels/Deleat.vue';
import Copy from '@/components/molecuels/Copy.vue';
import Sortbtn from '@/components/molecuels/Sortbtn.vue';
import Print from '@/components/molecuels/Print.vue';
@Component({ components: { Register,Fixbtn,Deleat,Copy,Sortbtn,Print}})
export default class InvoiceList extends Vue {
}
</script>