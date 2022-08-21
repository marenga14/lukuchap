<!-- @format -->

<template>
	<v-container>
		<v-card class="mt-4 pt-4 unit-center shadowyellow" height="">
			<v-container>
				<v-card-title mb-5 pb-5>
					<v-icon class="text-dark">mdi-bell</v-icon>
					<span class="ps-3 text-dark"
						>Get notified when the units reach minimum or maximum level
						specified</span
					>
				</v-card-title>

				<v-form
					ref="form"
					v-model="valid"
					lazy-validation
					class="pt-5 mt-5 text-dark"
				>
					<v-text-field
						width="50px"
						v-model="min"
						:rules="nameRules"
						label="Enter the minimum value"
						required
						class="text-dark"
					></v-text-field>

					<v-text-field
						width="50%"
						v-model="max"
						label="Enter the Maximum Value"
						required
						class="text-dark"
					></v-text-field>

					<div class="unit-center">
						<v-btn
							width="120px"
							class="green py-2 px-2 text-white mx-3"
							@click="reset"
						>
							<h4>SET</h4>
						</v-btn>
					</div>
				</v-form>
			</v-container>
		</v-card>
	</v-container>
</template>
<script>
	export default {
		name: "settingPage",
	};
</script>
<style>
	.unit-center {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
