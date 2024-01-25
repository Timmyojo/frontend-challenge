<script>
export let data;
</script>

<div class="flex flex-col w-full gap-1">
    <p>{data.name}</p>
    <div class="w-full h-2 bg-gray-100 rounded-full">
        <div style="width: {data.change * 3}%; background-color: {data.color};" class="h-2 rounded-full"></div>
    </div>
    <div class="flex justify-between text-gray-500">
        <span>${data.amount}</span>
        <span>+{data.change}%</span>
    </div>
</div>