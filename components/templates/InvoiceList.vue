<template>
<v-col>
<InvoiceListorg /><Headerorg/>
</v-col>
</template>The template root requires exactly one element
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import InvoiceListorg from '@/components/organisms/InvoiceListorg.vue';
import Headerorg from '~/components/organisms/Headerorg.vue';
@Component({ components: { InvoiceListorg, Headerorg}})
export default class InvoiceList extends Vue {
}
</script>