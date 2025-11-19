<script setup>
import Search from "~/components/search.vue";
const appConfig = useAppConfig();
const { textsDb, videosDb } = appConfig;
const sources = [...textsDb, ...videosDb].sort((a, b) => a.year - b.year);
</script>
<template>
  <Search collection="burisch" :sources="sources" title="Dan Burisch Corner" key="burisch" id="search-burisch" />
</template>

<style lang="scss" scoped>
</style>