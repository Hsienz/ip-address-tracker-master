<script lang="ts">
    export let title:string = ""
    export let content: string = ""
</script>
<div class="flex flex-col xl:gap-1">
    <h2 class="text-Dark_Gray text-xs xl:text-sm font-bold">{title}</h2>
    <p class="font-medium text-2xl xl:text-3xl flex-wrap">{content}</p>
</div>