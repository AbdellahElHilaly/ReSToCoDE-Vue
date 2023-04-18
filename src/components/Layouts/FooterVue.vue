<template>

        <footer class="text-center text-lg-start ">
            <!-- Section: Social media -->
            <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <!-- Left -->
            <div class="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
            </div>
            <!-- Left -->

            <!-- Right -->
            <div>
                <a href="" class="me-4 ">
                <i class="fab fa-facebook-f"></i>
                </a>
                <a href="" class="me-4 ">
                <i class="fab fa-twitter"></i>
                </a>
                <a href="" class="me-4 ">
                <i class="fab fa-google"></i>
                </a>
                <a href="" class="me-4 ">
                <i class="fab fa-instagram"></i>
                </a>
                <a href="" class="me-4 ">
                <i class="fab fa-linkedin"></i>
                </a>
                <a href="" class="me-4 ">
                <i class="fab fa-github"></i>
                </a>
            </div>
            <!-- Right -->
            </section>
            <!-- Section: Social media -->

            <!-- Section: Links  -->
            <section class="">
            <div class="container text-center text-md-start mt-5">
                <!-- Grid row -->
                <div class="row mt-3">
                <!-- Grid column -->
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <!-- Content -->
                    <h6 class="text-uppercase fw-bold mb-4 ">
                        <p class="logo">ReSToCoDE</p>

                    </h6>
                    <p>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <!-- Links -->
                    <h6 class="text-uppercase fw-bold mb-4">
                    Products
                    </h6>
                    <p>
                    <a href="#!" class="">Angular</a>
                    </p>
                    <p>
                    <a href="#!" class="">React</a>
                    </p>
                    <p>
                    <a href="#!" class="">Vue</a>
                    </p>
                    <p>
                    <a href="#!" class="">Laravel</a>
                    </p>
                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <!-- Links -->
                    <h6 class="text-uppercase fw-bold mb-4">
                    Useful links
                    </h6>
                    <p>
                    <a href="#!" class="">Pricing</a>
                    </p>
                    <p>
                    <a href="#!" class="">Settings</a>
                    </p>
                    <p>
                    <a href="#!" class="">Orders</a>
                    </p>
                    <p>
                    <a href="#!" class="">Help</a>
                    </p>
                </div>
                </div>
            </div>
            </section>
        </footer>

</template>


<style scoped>
    footer {
        background-color: black;
        color: white;
    }
    a{
        color: orange;
    }
    .logo{
        color: orange;
        box-shadow : 0 0 5px orange;
        font-size: 1.5rem;
        padding: 0.5rem;
        width: fit-content;
        animation: changescolor 8s infinite;
        text-transform: none;
    }

    @keyframes changescolor {
        0%{
            color: orange;
            box-shadow : 0 0 5px orange;
        }

        25%{
            color: orangered;
            box-shadow : 0 0 5px orangered;
        }

        50%{
            color: black;
            box-shadow : 0 0 5px white;
        }

        75%{
            color: white;
            box-shadow : 0 0 5px black;
        }

        100%{
            color: orange;
            box-shadow : 0 0 5px orange;
        }
    }



</style>