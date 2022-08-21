<!-- @format -->

<template>
	<v-container class="my-3">
		<v-row>
			<v-col cols="8" sm="6" md="8">
				<v-card dark height="200px" class="unit-center shadowyellow">
					<v-card-item>
						<h1 class="mx-4 text-dark">28 kwh</h1>
						<h3 class="text-dark">Units remained</h3>
					</v-card-item>
				</v-card>
			</v-col>
			<v-col cols="4" sm="3" md="4">
				<v-card class="shadowyellow" dark height="200px">
					<v-card-title>
						<h3></h3>
					</v-card-title>
				</v-card>
			</v-col>
		</v-row>

		<v-row>
			<v-col cols="12">
				<v-card height="">
					<div class="green unit-center white--text">
						<v-card-title height="">
							<h3 class="text-white">USAGE</h3>
						</v-card-title>
					</div>

					<v-tabs class="unit-around" centered slider-color="green" container>
						<v-spacer></v-spacer>
						<v-tab class="">Daily</v-tab>
						<v-spacer></v-spacer>
						<v-tab class="">Weekly</v-tab>
						<v-spacer></v-spacer>
						<v-tab>Monthly</v-tab>
						<v-spacer></v-spacer>
					</v-tabs>
					<!-- <div class="unit-center">
      <div class="outer ">
        <div class="inner2">

        </div>
      </div>
      </div> -->
					<div class="unit-center mx-5 my-5 container px-5 py-5">
						<canvas id="myChart" width="50%" height="50%"></canvas>
					</div>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import { defineComponent } from "vue";
	import Chart from "chart.js/auto";

	// Components

	export default defineComponent({
		name: "HomeView",

		components: {},
		mounted() {
			const ctx = document.getElementById("myChart");

			const myChart = new Chart(ctx, {
				type: "bar",
				data: {
					labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
					datasets: [
						{
							label: "# of Votes",
							data: [1, 4, 3, 5, 2, 3],
							backgroundColor: [
								"rgba(255, 99, 132, 0.2)",
								"rgba(54, 162, 235, 0.2)",
								"rgba(255, 206, 86, 0.2)",
								"rgba(75, 192, 192, 0.2)",
								"rgba(153, 102, 255, 0.2)",
								"rgba(255, 159, 64, 0.2)",
							],
							borderColor: [
								"rgba(255, 99, 132, 1)",
								"rgba(54, 162, 235, 1)",
								"rgba(255, 206, 86, 1)",
								"rgba(75, 192, 192, 1)",
								"rgba(153, 102, 255, 1)",
								"rgba(255, 159, 64, 1)",
							],
							borderWidth: 1,
						},
					],
				},
				options: {
					scales: {
						y: {
							beginAtZero: true,
						},
					},
				},
			});
			myChart;
		},
	});
</script>
<style>
	.unit-center {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.green {
		background-color: #00a355;
	}
	.unit-around {
		display: flex;
		justify-content: space-between;
	}

	.outer {
		height: 150%;
		width: 50%;
		border-radius: 50%;
		padding: 4px;
		border: 4px solid #00247d;
	}
	.shadowyellow {
		box-shadow: 0px 4px 0px 0px;
		color: #fcd10940;
	}
</style>
