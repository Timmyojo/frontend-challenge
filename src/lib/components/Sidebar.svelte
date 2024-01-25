<script>
    import {page} from "$app/stores";
    import {navList} from "$lib/data.js";

    const darkMode = () => {
        document.documentElement.classList.add('dark')
    };

    const lightMode = () => {
        document.documentElement.classList.remove('dark')
    };
</script>
<header class="relative w-[80px] flex flex-col items-center h-screen gap-20 p-4 bg-gray-400/10">
    <nav>
        <div class="mb-6 text-xl ">
            <a href="/">
                <img alt="back" src="assets/Vector.svg"/>
            </a>
        </div>
        <ul class="flex flex-col gap-4 capitalize">
            {#each navList as nav}
            <li class="flex items-center justify-center">
                <a href="{nav.url}" class="w-[34px] md:w-full md:h-full" >
                    <img alt={nav.url} src={nav.icon}/>
                </a>
                {#if $page.url.pathname == nav.url}
                    <img class="absolute right-0" alt="back" src="assets/Vector1.svg"/>
                {/if}
            </li>
            {/each}
            <li class="flex flex-col items-center justify-center gap-4 py-2 bg-white rounded-full dark:bg-gray-800 ">
                <img class="w-[25px] md:w-[27px]" alt="theme toggle" src="assets/sun.svg" on:click={ () => lightMode()}/>
                <img class="w-[25px] md:w-[27px]" alt="theme toggle" src="assets/moon.svg" on:click={ () => darkMode()}/>
            </li>
        </ul>
    </nav>
    <div class="flex flex-col gap-2 justify-self-start">
        <a href="/#">
            <img alt="back" src="assets/Frame 12d.svg"/>
        </a>
        <a href="/#">
            <img alt="back" src="assets/Frame 12e.svg"/>
        </a>
        <a href="/#">
            <img alt="back" src="assets/Frame 12f.svg"/>
        </a>
    </div>
</header>
    