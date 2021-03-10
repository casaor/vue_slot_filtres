<template>

    <transition
        enter-active-class="animate__animated animate__backInDown"
        leave-active-class="animate__animated animate__backOutDown">

        <slot></slot>

    </transition>

</template>

<script type="text/javascript" src="./../Scripts/backindown.js"></script>