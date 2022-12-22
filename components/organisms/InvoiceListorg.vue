
<template>
<v-row>
  <v-col> 
    <Sortbtn/><Register /><Fixbtn/><Deleat/><copy/>
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

@Component({ components: { Register,Fixbtn,Deleat,Sortbtn, Copy}})
export default class InvoiceList extends Vue {
}
</script>