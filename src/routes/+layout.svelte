<script>
    import "../app.css";
    import Sidebar from "../lib/components/Sidebar.svelte";
    import {page} from "$app/stores";

    const name = "justin bergson";
    const email = "justin@gmail.com";
    const date = "15 November, 2023";

</script>

<section class="flex overflow-hidden">
    <Sidebar />

    <aside class="w-full bg-white dark:bg-gray-800">
        <header class="flex items-center justify-between px-6 py-2 border-b-2 border-gray-100">
            <div class="flex items-center justify-between w-[80%] md:w-[65%]">
                <div class="font-[600] capitalize">
                    {$page.url.pathname.split('/')[2] === undefined ? "dashboard":$page.url.pathname.split('/')[2]}
                </div>
                <div class="relative">
                    <img class="absolute left-[6px] bottom-2" alt="back" src="assets/search.svg"/>
                    <input type="text" placeholder="Search..." class="border-2 py-[4px] pl-7 rounded-full outline-none w-[80%] md:w-72" >
                </div>
            </div>
            <div class="flex items-center gap-8">
                <div class="hidden gap-1 md:flex">
                    <img alt="back" src="assets/solar_calendar-linear.svg"/>
                    <span class="text-sm">{date}</span>
                </div>
                <div class="items-center justify-center hidden w-8 h-8 px-1 border-2 rounded-full md:flex">
                    <img alt="back" src="assets/solar_bell-outline.svg"/>
                </div>
                <div class="flex justify-between gap-4 px-1 border-2 rounded-full">
                    <img alt="back" src="assets/Profile.svg"/>
                    <div class="flex-col hidden text-right md:flex">
                        <span class="capitalize font-[600]">{name}</span>
                        <span class="pb-1 text-sm text-gray-400">{email}</span>
                    </div>
                    <img alt="back" src="assets/arrowdown.svg" class="hidden md:block"/>
                </div>
            </div>
        </header>
        <div class="px-6 py-3">
            
            <slot />
        </div>
    </aside>
</section>