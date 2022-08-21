<!-- @format -->

<template>
	<v-container>
		<v-card class="shadow-lg">
			<v-row class="my-5 py-5">
				<v-col cols="3" class="mx-5 px-5">
					<div>
						<v-img
							lazy-src="https://picsum.photos/id/11/10/6"
							max-height="180"
							max-width="250"
							src="https://picsum.photos/id/11/500/300"
						></v-img>
                        <h6 class="my-2">Profile</h6>
                        <h6>Meter</h6>
					</div>
				</v-col>
				<v-col cols="4">
					<div>
						<p class="p-2">
							<span>Name:</span><span class="me-2 pe-2">Juma Kibwana</span><v-btn icon flat><v-icon>mdi-pencil-outline</v-icon></v-btn>
						</p>
						<p class="p-2">
							<span>Gender:</span><span class="mx-2 px-2"> Male</span><v-btn icon flat><v-icon>mdi-pencil-outline</v-icon></v-btn>
						</p>
						<p class="p-2">
							<span>Location:</span><span class="mx-2 px-2">Dar es Salaam</span>  <v-btn icon flat><v-icon>mdi-pencil-outline</v-icon></v-btn>
						</p>
						<p class="p-2">
							<span>Meter Number:</span><span class="mx-2 px-2">145526627763</span> <v-btn icon flat><v-icon>mdi-pencil-outline</v-icon></v-btn>
						</p>
						<p class="p-2">
							<span>Register:</span><span class="mx-2 px-2"> month Ago</span> <v-btn icon flat><v-icon>mdi-pencil-outline</v-icon></v-btn>
						</p>
					</div>
					<div class="unit">
						<button class="btn text-green border-style">Save Changes</button>
					</div>
				</v-col>
			</v-row>
		</v-card>
	</v-container>
</template>

<script>
	export default {
		name: "profilePage",
	};
</script>
<style scoped>
.text-green{
    color: #00A355;
}
 .border-style{
    border: 1.5px solid grey

 }
</style>
