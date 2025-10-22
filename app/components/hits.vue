<script setup>
function escapeRegExp(string) {
  return string.replace(/['.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
const props = defineProps(['value', 'bg', 'highlights'])
const hits = computed(() => {
  return props.highlights?.map(({ texts }) => texts).flat().filter(({ type }) => type === 'hit') || [];
})
const parsed = computed(() => {
  const hits = !props.highlights ? [] : props.highlights.map(({ texts }) => texts)
      .flat().filter(({ type }) => type === 'hit')
      .map(({ value }) => value).sort((a, b) => a.length - b.length);
  let message = props.value || '';
  hits.forEach(value => {
    message = message.replace(new RegExp(escapeRegExp(value)+'(?!QQQQ)'), 'QQQQ'+value+'QQQQ')
  })
  const splits = message.split(/QQQQ/g);
  return splits.map((split, index) => {
    return {
      text: split,
      em: index % 2 !== 0
    }
  })
})
</script>
<template>
  <div>
    <span :class="split.em ? props.bg ? 'highlight-bg' : 'highlight' : ''" v-for="split of parsed">
      {{ split.text }}
    </span>...
  </div>
</template>

<style scoped>

.highlight-bg {
  background-color: #178bb2;
  color: white;
}
.highlight {
  font-weight: bold;
  color: #178bb2;
}
</style>