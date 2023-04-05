<template>

    <div class="col-xl-3 col-sm-6 col-12 mb-4">
        <div class="card">
            <div class="card-body">
                <div class="d-flex justify-content-between px-md-1">
                    <div class="align-self-center">
                        <slot name="icon">
                            ...
                        </slot>
                    </div>
                    <div class="text-end">
                        <h3>
                            <slot name="number">
                                ...
                            </slot>
                        </h3>
                        <p class="mb-0">
                            <slot name="text">
                            ...
                            </slot>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>



</template>


