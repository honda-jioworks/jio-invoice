<template>
    <DisplayDestinationForm />
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import DisplayDestinationForm from '@/components/templates/DisplayDestinationForm.vue';
@Component({ components: { DisplayDestinationForm } })
export default class InvoiceIssuePages extends Vue {
}
</script>


