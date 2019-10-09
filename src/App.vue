<template>
	<div id="app">
		<Rating msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
import Rating from './components/RatingComponent.vue'

export default {
	name: '#app',
	components: {
		Rating
	}
}
</script>

<style lang="scss">
.rating {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	font-size: 14px;
	color: #a7a8a8;
}
.list {
	margin: 0 0 5px 0;
	padding: 0;
	list-style-type: none;
}
.list:hover .star {
	color: #f3d23e;
}
.star {
	display: inline-block;
	cursor: pointer;
}
.star:hover ~ .star:not(.active) {
	color: inherit;
}
.active {
	color: #f3d23e;
}
</style>
