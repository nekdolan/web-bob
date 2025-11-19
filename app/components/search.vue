<script setup>
import debounce from 'lodash.debounce';
import Hits from "~/components/hits.vue";
const props = defineProps(['collection', 'sources', 'title']);
const sources = props.sources;
const router = useRouter();
const route = useRoute();
const search = ref(route.query.q || '');
const page = ref((route.query.p * 1) || 1);
const q = computed(() => {
  return search.value;
});
const p = computed(() => {
  return page.value;
});
const pageSize = 20;
const { data = {}, status } = await useLazyAsyncData(`search_${props.collection}`, () => {
  if (q.value?.length >= 3) {
    return $fetch('https://gsdufojxqj.execute-api.us-east-1.amazonaws.com/dev/search', {
      query: { q: q.value, p: p.value, s: pageSize, c: props.collection || 'lazar' }
    })
  }
  return {};
}, {
  server: false, watch: [q, p]
});
const debouncedHandler = debounce(event => {
  search.value = event.target.value;
  page.value = 1;
  router.push({query: {q: search.value, p: 1}})
}, 500);
watch(() => page.value, (value) => router.push({query: {q: search.value, p: value}}));
</script>
<template>
  <IContainer fluid class="star-background" style="min-height: calc(100vh - 110px)">
    <h1 class=" d3 _margin-top:2 _margin-bottom:1 _text-align:center">{{ props.title }}</h1>
    <IContainer>
      <IRow>
        <IColumn>
            <ICollapsible>
              <ICollapsibleItem>
                <template #header><IIcon class="_vertical-align:text-top" name="ink-warning" /> Information</template>
                <p>
                  All sources in the library have been verified, however most videos have been transcribed using AI
                  and may contain errors or have less content than the original. Discernment is advised.
                </p>
                <p class="_text:bold">Copyright Notice:</p>
                <p>
                  All content on this page is provided for informational purposes only. None of the content presented
                  herein is owned or claimed by this website. Any intellectual property rights pertaining to the
                  content belong to their respective owners.<IIcon class="_vertical-align:text-top" name="ink-warning" />
                </p>
              </ICollapsibleItem>
            </ICollapsible>
          <hr>
          <ICard>
            <IInput name="search-input" type="text" v-on:input="debouncedHandler" :model-value="search" placeholder="Type here..." >
              <template #prepend><span class="_font-size:xl">Search:</span></template>
            </IInput>
          </ICard>
          <div v-if="!data?.results && status === 'success'">
            <ITable striped border condensed>
              <thead>
              <tr>
                <th class="_text-align:center">#</th>
                <th>Title</th>
                <th class="_text-align:center">Year</th>
                <th class="_text-align:center">Source</th>
              </tr>
              </thead>
              <tbody>
                <tr class="header-row" v-for="(hit, index) of sources" :key="hit.name">
                  <td class="_text-align:center">{{ index + 1 }}</td>
                  <td class="_max-width:50vw">{{ hit.name }}</td>
                  <td class="_text-align:center">{{ hit.year }}</td>
                  <td class="_text-align:center"><nuxt-link :to="hit.link" external>Link</nuxt-link></td>
                </tr>
              </tbody>
            </ITable>
          </div>
          <div class="_display:flex! _justify-content:center!" v-if="status === 'pending'">
            <div class="_width:25%">
              <ILoader size="auto" color="dark" />
            </div>
          </div>
          <div class="_display:flex! _justify-content:center!" v-if="status === 'success' && data?.total > pageSize">
            <IPagination size="sm" v-model="page" :items-total="data.total" :items-per-page="pageSize" :limit="5" />
          </div>
          <IAlert v-if="data?.results?.length === 0" color="warning">No results found!</IAlert>
          <div v-else-if="data?.results && status === 'success'" >
            <ITable striped border condensed>
              <thead>
              <tr>
                <th class="_text-align:center">#</th>
                <th>Title</th>
                <th class="_text-align:center">Year</th>
                <th class="_text-align:center">Source</th>
              </tr>
              </thead>
              <tbody>
              <template v-for="(hit, index) of data?.results || []" key="">
                <tr class="header-row">
                  <td class="_text-align:center">{{ index + 1 }}</td>
                  <td class="_max-width:50vw">{{ hit.name }}</td>
                  <td class="_text-align:center">{{ hit.year }}</td>
                  <td class="_text-align:center"><nuxt-link :to="hit.link" external>Link</nuxt-link></td>
                </tr>
                <tr>
                  <td colspan="4" class="_max-width:75vw" >
                    <Hits :value="hit.text" :highlights="hit.highlights" bg="true" class="_overflow:hidden"/>
                  </td>
                </tr>
              </template>
              </tbody>
            </ITable>
          </div>
          <div class="_display:flex! _justify-content:center!" v-if="status === 'success' && data?.total > pageSize">
            <IPagination size="sm" v-model="page" :items-total="data.total" :items-per-page="pageSize" :limit="5" />
          </div>
        </IColumn>
      </IRow>
    </IContainer>
  </IContainer>
</template>

<style lang="scss" scoped>
</style>