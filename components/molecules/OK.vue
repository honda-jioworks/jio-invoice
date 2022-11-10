<template>
    <v-sheet>
        <v-row>
            <v-col>
               <OKInput />
               <OKlabel />
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import OKlabel from '@/components/atoms/label/OKlabel.vue'
import OKInput from '@/components/atoms/input/OKInput.vue'
@Component({ components: { OKlabel, OKInput } })
export default class DashBoard extends Vue {
    // templatesはページの大まかな配置（ワイヤーフレーム）を管轄
}
</script>