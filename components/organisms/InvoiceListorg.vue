<template>
<Sortbtn/>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import Sortbtn from '@/components/molecuels/Sortbtn.vue';
@Component({ components: { Sortbtn}})
export default class InvoiceList extends Vue {
}
</script>