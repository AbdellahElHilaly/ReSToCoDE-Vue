<template>
    <div class="col-xl-6 col-md-12 mb-4">
        <div class="card">
            <div class="card-body">
                <div class="d-flex justify-content-between p-md-1">
                    <div class="d-flex flex-row">
                        <div class="align-self-center">
                            <slot name="icon">
                                ...
                            </slot>
                        </div>
                        <div>
                            <h4><slot name="title">
                            ...
                            </slot></h4>
                            <p class="mb-0">
                                <slot name="text">
                                ...
                                </slot>
                            </p>
                        </div>
                    </div>
                    <div class="align-self-center">
                        <h2 class="h1 mb-0">    
                            <slot name="number">
                                ...
                            </slot>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>