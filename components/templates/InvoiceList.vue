<template>
<InvoiceListorg/>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import InvoiceListorg from '@/components/organisms/InvoiceListorg.vue'
@Component({ components: { InvoiceListorg}})
export default class InvoiceList extends Vue {
}
</script>