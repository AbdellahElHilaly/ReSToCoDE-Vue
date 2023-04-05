<script setup>

import NewSatCard from '@/components/Layouts/dashboard/NewSatCard.vue';

const  icons=[ 
    "fas fa-pencil-alt text-info fa-3x",
    "far fa-comment-alt text-warning fa-3x",
    "fas fa-chart-line text-success fa-3x",
    "fas fa-map-marker-alt text-danger fa-3x",
    "fas fa-rocket text-danger fa-3x",
    "far fa-user text-success fa-3x",
    "fas fa-chart-pie text-warning fa-3x",
    "far fa-life-ring text-info fa-3x",
    "fas fa-book-open text-info fa-3x",
    "far fa-comments text-warning fa-3x",
    "fas fa-mug-hot text-success fa-3x",
    "fas fa-map-marker-alt text-danger fa-3x",
  ]


const dataStat = [
  {
    number: "278",
    text: "New Posts"
  },
  {
    number: "156",
    text: "New Comments"
  },
  {
    number: "64.89 %",
    text: "Bounce Rate"
  },
  {
    number: "423",
    text: "Total Visits"
  },
  {
    number: "278",
    text: "New Projects"
  },
  {
    number: "156",
    text: "New Clients"
  },
  {
    number: "64.89 %",
    text: "Conversion Rate"
  },
  {
    number: "423",
    text: "Support Tickets"
  },
  {
    number: "278",
    text: "New Posts"
  },
  {
    number: "156",
    text: "New Comments"
  },
  {
    number: "64.89 %",
    text: "Bounce Rate"
  },
  {
    number: "423",
    text: "Total Visits"
  }
];


</script>

<template>
  <section>
    <div class="row"> 
        <NewSatCard v-for="(stat, index) in dataStat" :key="index">
          <template #icon>
            <i :class="icons[index]"></i>
          </template>
          <template #number>
            {{ stat.number }}
          </template>
          <template #text>
            {{ stat.text }}
          </template>
        </NewSatCard>
    </div>
  </section>
</template>