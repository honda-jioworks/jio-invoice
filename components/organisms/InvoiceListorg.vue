<template>
<Invoicemol/>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Invoicemol from '@/components/molecuels/Invoicemol.vue'
@Component({ components: { Invoicemol}})
export default class InvoiceListorg extends Vue {
}
</script>