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

const open = ref('item-1');

</script>
<template>
  <span v-if="props.week * 7 + props.day >= props.year.start[props.month] && day <= props.year.days[month]">
    <IPopover v-if="dateInfo" class="record" placement="bottom">
      <ITooltip>
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
          <nuxt-link external :href="dateInfo.sources[0].link" target="_blank" class="_display:inline-block">
            {{ dateInfo.sources[0].name }}
          </nuxt-link>
        </div>
        <ICollapsible v-else>
          <ICollapsibleItem name="item-2" title="Sources">
            <div v-for="link in dateInfo.sources">
              <nuxt-link external :href="link.link" target="_blank" class="_display:inline-block">{{ link.name }}</nuxt-link>
            </div>
          </ICollapsibleItem>
        </ICollapsible>
      </template>
    </IPopover>
    {{ day }}
  </span>
  <template v-else>
    &nbsp;
  </template>
</template>

<style lang="scss">
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