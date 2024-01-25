<script>
    export let data;

</script>

<div class="flex flex-col w-full h-full gap-1 px-6 py-4 border-2 border-gray-100 rounded-xl">
    <div class="flex items-center justify-between">
        <img alt={data.title} src={data.icon}/>
        <img alt={data.title} src="{data.gain === true ? "assets/Group 3.svg" : "assets/Group 4.svg"}"/>
    </div>
    <span class="text-gray-400 capitalize">{data.title}</span>
    <span class="text-xl font-bold">{data.title === "total income" ? `$${data.value}`:`${data.value}`}</span>
    <span class="flex gap-4 text-xs font-[500]">
        <span class="{data.gain === true ? "text-teal-300 bg-teal-100": "text-rose-300 bg-rose-100"} px-1 rounded-xl w-fit flex gap-1 items-center">
            <img alt={data.title} src="{data.gain === true ? "assets/trending-up.svg" : "assets/trending-down.svg"}"/>
            {data.change}
        </span>
         vs. previous month
    </span>
</div>