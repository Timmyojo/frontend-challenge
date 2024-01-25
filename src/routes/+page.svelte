<script>
    import {orders, platforms, items} from "$lib/data.js";

    import BarChart from "../lib/components/BarChart.svelte";
    import Card from "../lib/components/Card.svelte";
    import PlatformItem from "$lib/components/PlatformItem.svelte";
    import Table from "../lib/components/table/Table.svelte";
    import TableBody from "../lib/components/table/TableBody.svelte";
    import TableBodyCell from "../lib/components/table/TableBodyCell.svelte";
    import TableBodyRow from "../lib/components/table/TableBodyRow.svelte";
    import TableHead from "../lib/components/table/TableHead.svelte";
    import TableHeadCell from "../lib/components/table/TableHeadCell.svelte";

</script>

<div class="w-full mb-4 md:flex md:gap-4">
    <div class="w-[95%] md:w-[65%] h-full">
        <div class="flex flex-col w-full h-full px-6 py-4 border-2 border-gray-100 rounded-xl">
            <div class="flex items-center justify-between">
                <h3 class="font-bold capitalize">sales trends</h3>
                <div>
                    <span>Sort by: </span>
                        <select name="sort" id="sort" class="px-1 capitalize border-2 rounded-full outline-none dark:bg-gray-800">
                            <option value="weekly"> weekly</option>
                            <option value="monthly">monthly</option>
                            <option value="yearly">yearly</option>
                        </select>
                </div>
            </div>
            <div class="h-[245px] w-[350px] md:w-[800px]">
                <BarChart />
            </div>
        </div>
    </div>
    <div class="w-[95%] md:w-[35%] h-full mt-6 md:mt-0">
        <div class="flex flex-wrap gap-4 md:grid md:grid-cols-2 md:gap-4">
            {#each items as item}
            <Card data={item}/>
            {/each}
        </div>
    </div>
</div>
<div class="w-full mb-4 md:flex md:gap-4">
    <div class="w-[95%] md:w-[65%] h-full">
        <div class="flex flex-col w-full h-full gap-1 px-6 py-4 border-2 border-gray-100 rounded-xl">
            <div class="flex items-center justify-between">
                <h3 class="font-bold capitalize">last orders</h3>
                <p class="text-lg text-teal-300 capitalize">see all</p>
            </div>
            <div>
                <Table>
                    <TableHead>
                        <TableHeadCell>name</TableHeadCell>
                        <TableHeadCell>date</TableHeadCell>
                        <TableHeadCell>amount</TableHeadCell>
                        <TableHeadCell>status</TableHeadCell>
                        <TableHeadCell>invoice</TableHeadCell>
                    </TableHead>
                    <TableBody>
                            {#each orders as order}
                                <TableBodyRow>
                                    <TableBodyCell>
                                        <span class="flex items-center gap-2 font-[600]">
                                            <img src={order.icon} alt={order.name}>
                                            {order.name}
                                        </span>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        {order.date}
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <span class="font-bold">${order.amount}</span>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <span class="{order.status == "paid" ? "text-teal-300": "text-rose-300"}">{order.status}</span>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <span class="flex items-center gap-1">
                                            <img src="assets/document-download.svg" alt="invoice">
                                            <span>view</span>
                                        </span>
                                    </TableBodyCell>
                                </TableBodyRow>
                            {/each}
                    </TableBody>
                </Table>
            </div>
        </div>
    </div>
    <div class="w-[95%] md:w-[35%] h-full mt-6 md:mt-0">
        <div class="px-6 py-4 ">
            <div class="flex items-center justify-between mb-4">
                <h3 class="font-bold capitalize">top platforms</h3>
                <p class="text-lg text-teal-300 capitalize">See all</p>
            </div>
            <div class="flex flex-col gap-3">
                {#each platforms as item}
                <PlatformItem data={item}/>
                {/each}
            </div>
        </div>
    </div>
</div>
