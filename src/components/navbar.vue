<!-- @format -->

<template>
	<nav>
		<v-toolbar class="light-grey shadow-md">
			<v-toolbar-title class="ms-3 ps-3">
				<span class="px-1">luku</span>
				<span>chap</span>
			</v-toolbar-title>

			<v-spacer></v-spacer>
			<v-btn icon router to="/">
				<v-icon>mdi-home</v-icon>
			</v-btn>
			<v-btn icon router to="">
				<v-icon>mdi-bell</v-icon>
			</v-btn>

			<v-btn icon router to="setting">
				<v-icon>mdi-cog</v-icon>
			</v-btn>
			<span>
				<v-btn icon router to="profile">
					<v-icon>mdi-account</v-icon>
				</v-btn>
			</span>
		</v-toolbar>
	</nav>
</template>

<script>
	import { defineComponent } from "vue";

	export default defineComponent({
		name: "navigationBar",
	});
</script>

<style>
	.light-grey {
		background-color: #ffffff;
	}
</style>
