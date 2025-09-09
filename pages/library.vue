<script setup>
import Search from "~/components/search.vue";
const appConfig = useAppConfig();
const { texts, videos } = appConfig;
const sources = [...texts, ...videos].sort((a, b) => a.year - b.year);
</script>
<template>
  <Search collection="lazar" :sources="sources" title="Library" />
</template>

<style lang="scss" scoped>
</style>