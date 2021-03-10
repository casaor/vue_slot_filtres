<template>

    <div class="modal" tabindex="-1" id="myModal" style="display:block">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <slot name="header"></slot>
                </div>
                <div class="modal-body">
                    <slot name="body"></slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </div>

</template>

<script type="text/javascript" src="./../Scripts/modalBootstrap.js"></script>