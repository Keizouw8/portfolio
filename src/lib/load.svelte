{#if timeoutGoing || stillLoading }
	<div class="loading fullpage" style="opacity: {opacity};">
		<svg width="432" height="207" viewBox="0 0 432 207" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path id="path1" d="M146 6C116.031 32.2228 89.4928 60.1174 64 90.6111C49.8797 107.501 35.7826 124.409 22.1111 141.667C17.514 147.47 12.7098 151.902 12 159" stroke="#C83C3C" stroke-width="8" stroke-linecap="round"/>
			<path id="path2" d="M128 77C99.2434 69.4573 67.7008 97.9059 48.5 115.667C45.179 118.739 31.8518 129.109 37.0556 134.833C40.7238 138.868 48.4428 139.116 53.3333 138.889C68.3775 138.19 83.4092 131.344 97.1111 125.778C98.2918 125.298 157.606 95.854 159.833 103.278C161.888 110.128 154.371 118.78 151.889 124.556C148.134 133.292 153.324 133.551 161.444 133.889C167.656 134.148 184.561 131.45 188.556 138.056C191.006 142.108 188.882 148.747 187.333 152.556C182.478 164.495 173.693 175.192 164.778 184.333C159.299 189.951 145.855 203.603 136.722 201.278C119.968 197.013 140.55 164.674 144.556 159.333C157.809 141.662 177.242 128.334 197.222 119.333C214.324 111.629 232.672 104.204 250.944 99.7222C264.61 96.3704 257.156 112.887 253.333 118.556C250.2 123.202 228.385 150.103 248.889 140C268.193 130.488 317.063 88.2818 302.667 104.278C298.651 108.739 277.727 129.827 296.889 127.556C306.073 126.467 313.089 121.727 320.611 116.778C326.336 113.012 319.024 117.42 317.778 118.667C311.57 124.874 304.802 137.957 319.722 132.722C328.507 129.64 336.741 124.702 345.111 120.667C348.771 118.902 342.388 124.612 341.889 125.111C340.468 126.532 333.572 131.913 334.333 134.389C335.921 139.549 366.338 126.983 369 126.111C380.861 122.225 397.838 114.538 410.611 116.667C415.711 117.517 418.068 127.922 420 132" stroke="#C83C3C" stroke-width="8" stroke-linecap="round"/>
		</svg>
	</div>
{/if}

<script lang="ts">
	let { stillLoading = true }: { stillLoading: Boolean } = $props();
	let timeoutGoing = $state(true);
	let opacity = $state(1);

	setTimeout(removeLoader, 3000);

	function removeLoader(): number {
		if(stillLoading) return setTimeout(removeLoader, 5000);
		opacity = 0;
		return setTimeout(() => timeoutGoing = false, 500);
	}
</script>

<style>
	.loading{
		z-index: 99999;
		background: #1e1e1e;
		transition: opacity 0.5s;
	}

	svg{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 50vw;
		height: 80vh;
	}

	#path1{
		--strokeLength: 205;
		animation: draw1 5s infinite;
	}

	#path2{
		--strokeLength: 955;
		animation: draw2 5s infinite;
	}

	path{
		stroke-dasharray: var(--strokeLength);
		stroke-dashoffset: var(--strokeLength);
	}

	@keyframes draw1{
		0%{
			stroke-dashoffset: var(--strokeLength);
		}

		10%{
			stroke-dashoffset: 0;
		}

		100%{
			stroke-dashoffset: 0;
		}
	}

	@keyframes draw2{
		0%{
			stroke-dashoffset: var(--strokeLength);
		}

		10%{
			stroke-dashoffset: var(--strokeLength);
		}

		50%{
			stroke-dashoffset: 0;
		}

		100%{
			stroke-dashoffset: 0;
		}
	}
</style>
