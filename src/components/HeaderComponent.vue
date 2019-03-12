<template>
	<header>
		This is header
		<button @click="removeTask()">Test remove Button</button>
	</header>
</template>

<script type="text/javascript">
	export default {
		methods: {
			removeTask () {
				this.$store.dispatch('removeTasks');
			},
		},
	}
</script>

<style type="text/css">
	header {
		color: darkmagenta;
	}
</style>