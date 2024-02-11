<script lang="ts">
	import SvelteTable from 'svelte-table';
	import TimeInTable from './TimeInTable.svelte';
	export let events: Array<any>;

	const columns = [
		{
			key: 'timestamp',
			title: 'Время',
			value: (v: any) => v.timestamp,
			sortable: true,
			renderComponent: {
				component: TimeInTable,
				props: { field: 'timestamp', format: 'YYYY-MM-DD HH:mm:sss' }
			}
		},
		{
			key: 'user',
			title: 'Пользователь',
			value: (v: any) => v.user?.email ?? '',
			sortable: true
		},
		{
			key: 'event',
			title: 'Событие',
			value: (v: any) => JSON.stringify(v.event),
			sortable: true
		}
	];
</script>

<SvelteTable
	{columns}
	rows={events}
	sortBy="timestamp"
	sortOrder={-1}
	classNameTable={'table table-compact table-zebra'}
	classNameThead={'bg-black'}
/>
