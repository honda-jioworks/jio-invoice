<template>
  <v-card class="mx-auto" color="grey lighten-4" max-width="600">
    <v-card-title>
      <v-icon :color="checking ? 'red lighten-2' : 'indigo'" class="mr-12" size="64" @click="takePulse">
        mdi-heart-pulse
      </v-icon>
      <v-row align="start">
        <div class="text-caption grey--text text-uppercase">Heart rate</div>
        <div>
          <span class="text-h3 font-weight-black" v-text="avg || '—'"></span>
          <strong v-if="avg">BPM</strong>
        </div>
      </v-row>

      <v-spacer></v-spacer>

      <v-btn icon class="align-self-start" size="28">
        <v-icon>mdi-arrow-right-thick</v-icon>
      </v-btn>
    </v-card-title>

    <v-sheet color="transparent">
      <v-sparkline
        :key="String(avg)"
        :smooth="16"
        :gradient="['#f72047', '#ffd200', '#1feaea']"
        :line-width="3"
        :value="heartbeats"
        auto-draw
        stroke-linecap="round"
      ></v-sparkline>
    </v-sheet>
    <v-btn color="red" @click="stop()">停止</v-btn>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
const exhale = (ms: number): Promise<unknown> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
@Component({
  components: {},
})
export default class HeartRate extends Vue {
  checking: boolean = false;
  heartbeats: Array<number> = [];
  paused = false;

  stop() {
    return (this.paused = true);
  }
  get avg(): number {
    const sum: number = this.heartbeats.reduce((acc, cur) => acc + cur, 0);
    const length: number = this.heartbeats.length;

    if (!sum && !length) return 0;

    return Math.ceil(sum / length);
  }

  created(): void {
    setInterval(() => {
      this.takePulse(false);
      console.log('2秒ごとに');
    }, 2000);
  }

  heartbeat(): number {
    return Math.ceil(Math.random() * (120 - 80) + 80);
  }

  async takePulse(inhale: boolean = true): Promise<void> {
    this.checking = true;

    inhale && (await exhale(1000));

    this.heartbeats = Array.from({ length: 20 }, this.heartbeat);

    this.checking = false;
  }
}
</script>
