<script lang="ts">
	import { PUBLIC_APP_NAME } from '$env/static/public';
</script>

<svelte:head />

<div class="container mx-auto">
	<div class="navbar bg-neutral">
		<div class="flex-none" />
		<div class="flex-1 ml-5">
			<a href="/" class="text-xl">{PUBLIC_APP_NAME}</a>
		</div>
		<div class="flex-none">
			<a href="/auth" role="button" class="btn btn-sm btn-primary">Войти</a>
		</div>
	</div>

	<div class="flex flex-col items-center px-5">
		<div
			class="flex gap-5 justify-between mt-8 text-lg leading-6 text-center whitespace-nowrap max-md:flex-wrap max-md:max-w-full"
		>
			<div class="grow font-bold text-cyan-600">Речные круизы по России и СНГ</div>
			<div class="grow font-medium text-zinc-500">Морские круизы по зарубежью</div>
		</div>
		<div
			class="flex flex-col self-stretch px-16 py-12 mt-6 w-full rounded-3xl bg-neutral-100 max-md:px-5 max-md:max-w-full"
		>
			<div class="max-md:max-w-full">
				<div class="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
					<div class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
						<div class="flex flex-col text-base font-medium leading-6 max-md:mt-3.5">
							<div class="flex gap-2 justify-between pr-3 text-neutral-800">
								<div class="flex-auto">Дата отправления</div>
								<img
									loading="lazy"
									src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e484db04e09cdd654b885ac615fa8075890c680d42a1a3b16736b4dd543c1a6?apiKey=7ca0d91bf1964af9995c1639997fb641&"
									class="aspect-square w-[19px]"
								/>
							</div>
							<div class="flex gap-3 justify-between mt-3">
								<div
									class="flex gap-5 justify-between px-4 py-4 bg-white rounded-lg border border-solid border-zinc-300 text-neutral-400"
								>
									<div class="self-start mt-4">__ __ ____</div>
									<img
										loading="lazy"
										src="https://cdn.builder.io/api/v1/image/assets/TEMP/9bb748e3e60efbe16fa258e7e3742fa52b2ad5e9464ffb10fd321a197e05be48?apiKey=7ca0d91bf1964af9995c1639997fb641&"
										class="aspect-square w-[21px]"
									/>
								</div>
								<div class="grow my-auto text-neutral-800">-</div>
							</div>
						</div>
					</div>
					<div class="flex flex-col ml-5 w-[51%] max-md:ml-0 max-md:w-full">
						<div class="flex flex-col grow text-base leading-6 max-md:mt-3.5 max-md:max-w-full">
							<div
								class="flex gap-2.5 self-end mr-16 font-medium whitespace-nowrap text-neutral-800 max-md:mr-2.5"
							>
								<div class="grow">Продолжительность</div>
								<img
									loading="lazy"
									src="https://cdn.builder.io/api/v1/image/assets/TEMP/c72858772ed70045ab22847473ce52c2ac3174d11ab0d8f02091a9c3ec543c5c?apiKey=7ca0d91bf1964af9995c1639997fb641&"
									class="aspect-square w-[19px]"
								/>
							</div>
							<div class="flex gap-5 justify-between mt-3 max-md:flex-wrap max-md:max-w-full">
								<div
									class="flex gap-5 justify-between px-4 py-4 font-medium bg-white rounded-lg border border-solid border-zinc-300 text-neutral-400"
								>
									<div class="self-start mt-4">__ __ ____</div>
									<img
										loading="lazy"
										src="https://cdn.builder.io/api/v1/image/assets/TEMP/9bb748e3e60efbe16fa258e7e3742fa52b2ad5e9464ffb10fd321a197e05be48?apiKey=7ca0d91bf1964af9995c1639997fb641&"
										class="aspect-square w-[21px]"
									/>
								</div>
								<div
									class="flex gap-5 justify-between px-4 py-4 whitespace-nowrap bg-white rounded-lg border border-solid border-zinc-300 text-neutral-800"
								>
									<div class="my-auto">Любая</div>
									<img
										loading="lazy"
										src="https://cdn.builder.io/api/v1/image/assets/TEMP/351f176c49ecadd8b7b3b258a824c9fa9cf4100c71d0fafcdd4d2851a888179f?apiKey=7ca0d91bf1964af9995c1639997fb641&"
										class="w-5 aspect-square"
									/>
								</div>
							</div>
							<div
								class="flex gap-2 self-center mt-2 ml-14 text-sm leading-7 whitespace-nowrap text-stone-500"
							>
								<img
									loading="lazy"
									src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5c2d2444078e2f22451142f34cc060d7b98fe5fb355eaf649b5fce2571a6ce9?apiKey=7ca0d91bf1964af9995c1639997fb641&"
									class="aspect-square w-[19px]"
								/>
								<div class="grow self-start mt-2">Очистить</div>
							</div>
						</div>
					</div>
					<div class="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
						<div class="flex flex-col grow text-base leading-6 text-neutral-800 max-md:mt-3.5">
							<div class="flex gap-2.5 justify-between pr-2.5 font-medium">
								<div class="flex-auto">Город отправления</div>
								<img
									loading="lazy"
									src="https://cdn.builder.io/api/v1/image/assets/TEMP/c72858772ed70045ab22847473ce52c2ac3174d11ab0d8f02091a9c3ec543c5c?apiKey=7ca0d91bf1964af9995c1639997fb641&"
									class="aspect-square w-[19px]"
								/>
							</div>
							<div
								class="flex gap-5 justify-between px-4 py-4 mt-3 whitespace-nowrap bg-white rounded-lg border border-solid border-zinc-300"
							>
								<div class="my-auto">Любой</div>
								<img
									loading="lazy"
									src="https://cdn.builder.io/api/v1/image/assets/TEMP/351f176c49ecadd8b7b3b258a824c9fa9cf4100c71d0fafcdd4d2851a888179f?apiKey=7ca0d91bf1964af9995c1639997fb641&"
									class="w-5 aspect-square"
								/>
							</div>
							<div
								class="flex gap-2 justify-between mt-2 text-sm leading-7 whitespace-nowrap text-stone-500"
							>
								<img
									loading="lazy"
									src="https://cdn.builder.io/api/v1/image/assets/TEMP/4481cab8e361d84e7182856cf2456967992e7a1a47d83825fb249fcc649e74fb?apiKey=7ca0d91bf1964af9995c1639997fb641&"
									class="aspect-square w-[19px]"
								/>
								<div class="flex-auto self-start mt-2">Очистить</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				class="flex gap-5 justify-between mt-1.5 text-base leading-6 whitespace-nowrap max-md:flex-wrap max-md:max-w-full"
			>
				<div class="flex flex-col basis-0 text-neutral-800">
					<div class="flex gap-2 justify-between pr-6 font-medium max-md:pr-5">
						<div class="flex-auto my-auto">Теплоходы</div>
						<img
							loading="lazy"
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/c72858772ed70045ab22847473ce52c2ac3174d11ab0d8f02091a9c3ec543c5c?apiKey=7ca0d91bf1964af9995c1639997fb641&"
							class="aspect-square w-[19px]"
						/>
					</div>
					<div
						class="flex gap-5 justify-between px-4 py-4 mt-3 bg-white rounded-lg border border-solid border-zinc-300"
					>
						<div class="my-auto">Любой</div>
						<img
							loading="lazy"
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/25faf41d70be532a0962600a9a89340f9be2355ab622e02b89ce9ff751ea6b77?apiKey=7ca0d91bf1964af9995c1639997fb641&"
							class="w-5 aspect-square"
						/>
					</div>
				</div>
				<div class="flex flex-col flex-1 max-md:max-w-full">
					<div class="flex gap-2.5 self-start font-medium text-neutral-800">
						<div class="grow my-auto">Стоимость, Р</div>
						<img
							loading="lazy"
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/c72858772ed70045ab22847473ce52c2ac3174d11ab0d8f02091a9c3ec543c5c?apiKey=7ca0d91bf1964af9995c1639997fb641&"
							class="aspect-square w-[19px]"
						/>
					</div>
					<div
						class="flex gap-2 justify-between mt-3 text-neutral-400 max-md:flex-wrap max-md:max-w-full"
					>
						<div
							class="justify-center items-start py-5 pr-16 pl-4 bg-white rounded-lg border border-solid border-zinc-300 max-md:pr-5"
						>
							От
						</div>
						<div class="my-auto font-medium text-neutral-800">-</div>
						<div
							class="justify-center items-start py-5 pr-16 pl-4 bg-white rounded-lg border border-solid border-zinc-300 max-md:pr-5"
						>
							До
						</div>
						<img
							loading="lazy"
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/99f1d7d155bc8ca5ad4f00c377ebb5a5d67ec731097d0f36c40d4e45e75a08ec?apiKey=7ca0d91bf1964af9995c1639997fb641&"
							class="aspect-[4.76] w-[237px]"
						/>
						<div
							class="flex gap-0.5 justify-between px-16 py-2.5 text-base font-medium leading-6 text-center text-white bg-red-600 rounded-lg max-md:px-5"
						>
							<img
								loading="lazy"
								src="https://cdn.builder.io/api/v1/image/assets/TEMP/8eb6c99c0d307a05ec2e6465394ad77eef3a1c2b0629aae88c0c59aa1b29db92?apiKey=7ca0d91bf1964af9995c1639997fb641&"
								class="aspect-square w-[30px]"
							/>
							<div class="grow self-start mt-2.5">Сбросить</div>
						</div>
					</div>
				</div>
			</div>
			<div class="flex gap-2 self-start mt-2 text-sm leading-7 whitespace-nowrap text-stone-500">
				<img
					loading="lazy"
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/3df48becdc0e8c7cdfc8dd141bf84744b012c76f7d55d94a2a1e9b2793d06e2a?apiKey=7ca0d91bf1964af9995c1639997fb641&"
					class="aspect-square w-[19px]"
				/>
				<div class="grow self-start mt-2">Очистить</div>
			</div>
			<div
				class="flex gap-2 justify-between self-start mt-9 mb-3 text-base font-semibold leading-6 whitespace-nowrap"
			>
				<div class="grow text-sky-900">Дополнительные параметры</div>
				<img
					loading="lazy"
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed80844fa46cf0e2960093f99fdde31fc865f3cfc50b841747d1bc98ec653fbf?apiKey=7ca0d91bf1964af9995c1639997fb641&"
					class="aspect-square w-[17px]"
				/>
				<div class="grow text-red-600 underline">Задать вопрос</div>
			</div>
		</div>
	</div>

	<!--
	<div class="mockup-window my-5 pb-10 bg-base-300">
		<div class="prose mx-auto">
			<SvelteMarkdown source={README} />
		</div>
	</div>
-->
	<footer class="footer items-center p-4 bg-neutral text-neutral-content">
		<div class="items-center grid-flow-col">
			<svg
				width="36"
				height="36"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				fill-rule="evenodd"
				clip-rule="evenodd"
				class="fill-current"
				><path
					d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
				/></svg
			>
			<p>© 2024 - Дмитрий Мирошкин</p>
		</div>
		<!--<div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
			<a href="/"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="fill-current"
					><path
						d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
					/></svg
				>
			</a>
			<a href="/"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="fill-current"
					><path
						d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
					/></svg
				></a
			>
			<a href="/"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="fill-current"
					><path
						d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
					/></svg
				></a
			>
		</div>-->
	</footer>
</div>
