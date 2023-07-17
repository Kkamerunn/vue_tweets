<template>
    <nav class="navbar navbar-dark bg-dark">
        <div class="container">
            <span class="navbar-brand">tweets simulator</span>
            <button 
                class="btn pl-4 pr-4" 
                :class="{ 'btn-danger' : showForm, 'btn-success' : !showForm }"
                @click="openCloseForm"
            >
            {{ !showForm ? 'New tweet' : 'Close tweet' }}
            </button>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        showForm: Boolean,
        openCloseForm: Function
    }
}
</script>

<style lang="scss" scoped>

</style>