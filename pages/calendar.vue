<script setup>
const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const shortDays = days.map(day => day.slice(0,2).toUpperCase())
const years = [
  {
    year: 1989,
    days: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    start: [1, 4, 4, 7, 2, 5, 7, 3, 6, 1, 4, 6]
  }
]

const year = years[0];

</script>
<template>
  <IContainer fluid class="star-background" style="min-height: calc(100vh - 110px)">
    <h1 class=" d3 _margin-top:2 _margin-bottom:1 _text-align:center">
      Calendar {{ year.year }}
    </h1>
    <IContainer>
      <IRow>
      <IColumn
          xs="12" sm="12" md="6" lg="3"
          v-for="(month, index) in months"
      >
        <h5 class="_text-transform:capitalize _text:center"> {{month}} </h5>
        <ITable condensed nowrap>
          <thead>
            <tr>
              <th v-for="day in shortDays" class="">{{day}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="week in [0,1,2,3,4,5]">
              <td v-for="day in [1,2,3,4,5,6,7]">
                <day :day="day" :week="week" :month="index" :year="year" />
              </td>
            </tr>
          </tbody>
        </ITable>
      </IColumn>
      </IRow>
    </IContainer>
  </IContainer>
</template>

<style lang="scss">
</style>