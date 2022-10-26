<template>
    <v-sheet>
        <v-row>
            <v-col>
               <CancelInput />
               <Cancellabel />
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Cancellabel from '@/components/atoms/label/Cancellabel.vue'
import CancelInput from '@/components/atoms/input/CancelInput.vue'
@Component({ components: { Cancellabel, CancelInput } })
export default class DashBoard extends Vue {
    // templatesはページの大まかな配置（ワイヤーフレーム）を管轄
}
</script>