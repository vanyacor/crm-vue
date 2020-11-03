<template>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>{{ "HistoryTable_sum" | localize }}</th>
        <th>{{ "HistoryTable_date" | localize }}</th>
        <th>{{ "HistoryTable_category" | localize }}</th>
        <th>{{ "HistoryTable_type" | localize }}</th>
        <th>{{ "HistoryTable_open" | localize }}</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(record, idx) of records" :key="record.id">
        <td>{{ idx + 1 }}</td>
        <td>{{ record.amount | currency("UAH") }}</td>
        <td>{{ record.date | date("datetime") }}</td>
        <td>{{ record.categoryName }}</td>
        <td>
          <span :class="[record.typeClass]" class="white-text badge">{{
            record.typeText
          }}</span>
        </td>
        <td>
          <button
            class="btn-small btn"
            @click="$router.push('/detail/' + record.id)"
            v-tooltip="HistoryTable_watchRecord"
          >
            <i class="material-icons">open_in_new</i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import localizeFilter from "@/filters/localize.filter";
export default {
  data: () => ({}),
  computed: {
    HistoryTable_watchRecord() {
      return localizeFilter("HistoryTable_watchRecord");
    },
  },
  props: {
    records: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style>
</style>