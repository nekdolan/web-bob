<script setup>
const appConfig = useAppConfig();
const { dates } = appConfig;

const props = defineProps(['day', 'week', 'year', 'month']);

const day = computed(() => {
  return (props.week * 7 + props.day - props.year.start[props.month] + 1)
})

const dateInfo = computed(() => {
  return dates.find(record => {
    return record.year === props.year.year &&
        record.month === props.month + 1 &&
        record.day === day.value;
  })
})

const visible = ref(false);

</script>
<template>
  <span v-if="props.week * 7 + props.day >= props.year.start[props.month] && day <= props.year.days[month]">
    <IPopover v-if="dateInfo" class="record" v-model:visible="visible" events="manual"
              @click:outside="visible = false" :class="visible ? 'no-tooltip':''" >
      <ITooltip @click="visible = !visible">
        <span :class="dateInfo.type" class="record-body">
          {{ day }}
          <span v-if="day <= 9">&nbsp;</span>
        </span>
        <template #body>
          {{ dateInfo.title }}
        </template>
      </ITooltip>
      <template #header>
        <span class="h5">
          {{ dateInfo.title }}
          {{ day }}/{{ month+1 }}/{{ dateInfo.year.toString().slice(2) }}
        </span>
      </template>
      <template #body>
        {{ dateInfo.text }}
      </template>
      <template #footer>
        <div v-if="dateInfo.sources.length === 1">
          Source:
          <nuxt-link external :href="dateInfo.sources[0].link" target="_blank">
            {{ dateInfo.sources[0].name }}
          </nuxt-link>
        </div>
        <div v-else class="sources">
          Sources:
          <ITooltip v-for="(link, index) in dateInfo.sources">
            <nuxt-link external :href="link.link" target="_blank">{{ index + 1 }}</nuxt-link>
            <span v-if="index + 1 < dateInfo.sources.length">,&nbsp;</span>
            <template #body>
              {{ link.name }}
            </template>
          </ITooltip>
        </div>
        <div>
          Participants:
          {{ dateInfo.participants.join(', ') }}
        </div>
      </template>
    </IPopover>
    {{ day }}
  </span>
  <template v-else>
    &nbsp;
  </template>
</template>

<style lang="scss">
.navbar-header {
  z-index: 100 !important;
}
.popover {
  z-index: 10000;
}
.no-tooltip .tooltip {
  visibility: hidden;
}
.sources .tooltip {
  visibility: initial;
}
.record {
  position: absolute;
  .record-body {
    margin-left: -5px;
    margin-top: -5px;
    padding: 5px;
    display: block;
    cursor: pointer;
  }
  .interview {
    background-color: green !important;
  }
  .attack {
    background-color: red !important;
  }
  .test {
    background-color: orange !important;
  }
  .meeting {
    background-color: blue !important;
  }
  .work {
    background-color: purple !important;
  }
}
</style>