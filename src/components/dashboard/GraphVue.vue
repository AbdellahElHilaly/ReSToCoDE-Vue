<script setup>
import Chart from 'chart.js/auto';
import { onMounted } from 'vue';

onMounted(() => {
    var ctx = document.getElementById("myChart");

    var myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ],
    datasets: [
        {
            label: "Dataset 1",
            data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
            lineTension: 0,
            backgroundColor: "transparent",
            borderColor: "#007bff",
            borderWidth: 4,
            pointBackgroundColor: "#007bff",
        },
        {
            label: "Dataset 2",
            data: [14339, 22345, 16483, 23003, 20489, 21092, 13034],
            lineTension: 0,
            backgroundColor: "transparent",
            borderColor: "#dc3545",
            borderWidth: 4,
            pointBackgroundColor: "#dc3545",
        },
        {
            label: "Dataset 3",
            data: [12339, 20345, 17483, 25003, 22489, 26092, 14034],
            lineTension: 0,
            backgroundColor: "transparent",
            borderColor: "#28a745",
            borderWidth: 4,
            pointBackgroundColor: "#28a745",
        },
    ],
    },
    options: {
    scales: {
        yAxes: [
        {
            ticks: {
            beginAtZero: false,
            },
        },
        ],
    },
    legend: {
        display: true,
    },
    },
});
});
</script>

<template>
    <section class="mb-4">
        <div class="card">
            <div class="card-header py-3">
                <h5 class="mb-0 text-center"><strong>Sales</strong></h5>
            </div>
            <div class="card-body">
                <canvas class="my-4 w-100" id="myChart" height="380"></canvas>
            </div>
        </div>
    </section>
</template>
