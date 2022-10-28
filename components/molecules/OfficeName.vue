<template>
    <v-sheet>
        <v-row>
            <v-col cols="2"><OfficeNameLabel /></v-col>
            <v-col cols="3"><OfficeNameTextBox /></v-col>
        </v-row>    
    </v-sheet>    
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import OfficeNameLabel from '~/components/atoms/label/OfficeNameLabel.vue'
import OfficeNameTextBox from '~/components/atoms/input/OfficeNameTextBox.vue'
@Component({ components: { OfficeNameTextBox, OfficeNameLabel } })
export default class OfficeName extends Vue {
    
}
</script>