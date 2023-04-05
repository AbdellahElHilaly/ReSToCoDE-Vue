<script setup>
import TotalStatCard from '@/components/Layouts/dashboard/TotalStatCard.vue';
const  icons=[
    "fas fa-pencil-alt text-info fa-3x me-4",
    "far fa-comment-alt text-warning fa-3x me-4",
    "far fa-heart text-danger fa-3x me-4",
    "fas fa-wallet text-success fa-3x me-4",
]
const dataStat = [
    {
        value: "18,000",
        title: "Total Posts",
        subtitle: "Monthly blog posts"
    },
    {
        value: "84,695",
        title: "Total Comments",
        subtitle: "Monthly blog comments"
    },
    {
        value: "$76,456.00",
        title: "Total Sales",
        subtitle: "Monthly Sales Amount"
    },
    {
        value: "$36,000.00",
        title: "Total Cost",
        subtitle: "Monthly Cost"
    },
];

</script>

<template>
    <section>
        <div class="row">
            <TotalStatCard v-for="(stat, index) in dataStat" :key="index">
                <template #icon>
                    <i :class="icons[index]"></i>
                </template>
                <template #title>
                    {{ stat.title }}
                </template>
                <template #text>
                    {{ stat.subtitle }}
                </template>
                <template #number>
                    {{ stat.value }}
                </template>
            </TotalStatCard>
        </div>
    </section>
</template>
