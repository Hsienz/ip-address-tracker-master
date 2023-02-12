<script lang="ts">
    export let title:string = ""
    export let content: string = ""
</script>
<div class="flex flex-col">
    <h2 class="text-Dark_Gray text-sm font-bold">{title}</h2>
    <h2 class="font-medium text-3xl flex-wrap">{content}</h2>
</div>