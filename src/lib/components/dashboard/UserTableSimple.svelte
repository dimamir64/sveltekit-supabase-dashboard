<script lang="ts">
	export let users: Array<any>;
</script>

<table class="table w-full">
	<!-- head -->
	<thead>
		<tr>
			<th>
				<label>
					<input type="checkbox" class="checkbox" />
				</label>
			</th>
			<th>Имя</th>
			<th>Место работы</th>
			<th>Любимый цвет</th>
			<th />
		</tr>
	</thead>
	<tbody>
		{#each users as user}
			<tr>
				<th>
					<label>
						<input type="checkbox" class="checkbox" />
					</label>
				</th>
				<td>
					<div class="flex items-center space-x-3">
						<div class="avatar">
							<div class="rounded-full ring ring-primary w-12 h-12">
								<img src={user.image} alt="Avatar Tailwind CSS Component" />
								<!-- <img src="https://placeimg.com/64/64/people" alt="Avatar Tailwind CSS Component" /> -->
								<!-- <img src="https://i.pravatar.cc/64" alt="Avatar Tailwind CSS Component" /> -->
							</div>
						</div>
						<div>
							<div class="font-bold">{user.firstName} {user.lastName}</div>
							<div class="text-sm opacity-50">{user.address.city}</div>
						</div>
					</div>
				</td>
				<td>
					{user.company.department}
					<br />
					<span class="badge badge-ghost badge-sm">{user.company.title}</span>
				</td>
				<td>{user.eyeColor}</td>
				<th>
					<label for="user-modal" class="btn btn-primary btn-xs modal-button">подробно</label>
					<!-- <button class="btn btn-primary btn-xs">details</button> -->
				</th>
			</tr>
		{/each}
	</tbody>
	<!-- foot -->
	<tfoot>
		<tr>
			<th />
			<th>Имя</th>
			<th>Место работы</th>
			<th>Любимый цвет</th>
			<th />
		</tr>
	</tfoot>
</table>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="user-modal" class="modal-toggle" />
<div class="modal">
	<div class="modal-box w-11/12 max-w-5xl">
		<h3 class="font-bold text-lg">Заготовка формы Подробно !</h3>
		<p class="py-4">TODO! Сформировать!</p>
		<div class="modal-action">
			<label for="user-modal" class="btn">Выйти!</label>
		</div>
	</div>
</div>
