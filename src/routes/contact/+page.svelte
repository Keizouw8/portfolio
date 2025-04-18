<Cursor />
<Frills background="var(--gray)" color="var(--red)">
	<div class="container">
		<div class="contacts">
			<h1 class="title">CONTACT</h1>
			<div class="info">
				<span>
					Email:
					<Selectable style="position: relative; align-items: flex-end; display: inline-flex; height: calc(5 * var(--unit));"
						effect="underline">
						keizouw8@gmail.com
					</Selectable>
					<div class="copy"><Fa size="0.75x" icon={faPaste} /></div>
				</span>
				<span>
					Phone:
					<Selectable style="position: relative; align-items: flex-end; display: inline-flex; height: calc(5 * var(--unit));"
						effect="underline">
						+1 (775) 223-6985
					</Selectable>
					<div class="copy"><Fa size="0.75x" icon={faPaste} /></div>
				</span>
				<span class="socials">Socials:
					<Selectable
						onclick={() => window.location = "https://github.com/Keizouw8" as string & Location}
						style="position: relative; align-items: flex-end; display: inline-flex; height: calc(4 * var(--unit)); width: calc(4.5 * var(--unit));"
						effect="none">
						<Fa class="social" icon={faGithub}/>
					</Selectable><Selectable
						onclick={() => window.location = "https://www.linkedin.com/in/keizou-wang/" as string & Location}
						style="position: relative; align-items: flex-end; display: inline-flex; height: calc(4 * var(--unit));"
						effect="none">
						<Fa class="social" icon={faLinkedin} />
					</Selectable>
				</span>
			</div>
		</div>
		<div class="write">
			<textarea placeholder={"Hi Keizou,\nYou're really cool!\n\nSincerely,\nYour biggest fan"}></textarea>
			<Selectable effect="none"><button>Leave me a note!</button></Selectable>
		</div>
	</div>
</Frills>
<Paper />
<script lang="ts">
	import Fa from "svelte-fa";
	import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
	import { faPaste } from "@fortawesome/free-solid-svg-icons";
	import Paper from "$lib/paper.svelte";
	import Cursor from "$lib/cursor.svelte";
	import Frills from "$lib/frills.svelte";
	import Selectable from "$lib/selectable.svelte";
</script>
<style>
	*{
		--unit: 1vh;
		cursor: none !important;
	}

	div.container{
		scroll-snap-type: x mandatory;
		overflow-x: scroll;
		position: absolute;
		height: 100%;
		width: 100%;
	}

	.write{
		scroll-snap-align: start;
		position: absolute;
		right: 10vh;
		top: 50%;
		transform: translateY(-50%);
		height: 45vh;
		width: calc(100vw - 75vh);
	}

	button{
		position: absolute;
		right: 1.5vh;
		bottom: 1.5vh;
		background: var(--red);
		outline: none;
		font-family: lazydog;
		color: white;
		font-size: 1.5vh;
		padding: 1vh;
		border: none;
		border-radius: 5px;
	}

	textarea{
		width: calc(100% - 3vh - 4px);
		height: calc(100% - 3vh - 4px);
		font-family: gabarito;
		font-size: 2vh;
		resize: none;
		outline: none;
		background: rgb(50, 50, 50);
		border: 2px solid rgb(70, 70, 70);
		border-radius: 10px;
		padding: 1.5vh;
		color: white;
	}

	textarea:focus{
		outline: none;
	}

	h1.title{
		font-family: gabarito;
		font-weight: 900;
		font-size: calc(8 * var(--unit));
		color: var(--red);
		margin-bottom: calc(2 * var(--unit));
	}

	.contacts{
		scroll-snap-align: start;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 10vh;
		width: calc(43 * var(--unit));
	}

	.info span{
		font-family: lazydog;
		display: inline-block;
		font-size: calc(3 * var(--unit));
		position: relative;
	}

	span .copy{
		position: absolute;
		left: 101%;
		bottom: 30%;
		opacity: 0;
		transition: opacity 0.2s;
	}

	span:hover .copy{
		opacity: 1;
	}

	:global(.social){
		transition: color 0.15s;
		font-size: calc(3.5 * var(--unit));
	}

	:global(:has(.social):hover > .social){
		color: var(--red);
	}

	@media(max-aspect-ratio: 1/1){
		*{
			--unit: min(1vh, 1.7vw);
		}

		.contacts{
			left: 0;
			padding-left: calc((100vw - (43 * var(--unit))) / 2);
		}

		.write{
			left: 150%;
			transform: translate(-50%, -50%);
			width: calc(90vw);
			padding-right: 5vw;
		}

		button{
			right: calc(5vw + 1.5vh);
		}
	}
</style>
