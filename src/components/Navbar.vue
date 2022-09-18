<template>
  <nav class="navbar">
    <div class="d-flex flex-row">
        <div class="container-fluid" style="display:inline-block">
            <a class="navbar-brand" href="#">
                <router-link to="/"><img id="img" src="@/assets/images/logo.jpg" alt=""></router-link>
            </a>
        </div>
        <div class="navtxt d-flex flex-row">
            <router-link to="/" class="navlink" id="links">Home</router-link>
            <router-link to="/ukratko" class="navlink" id="links">Naslovnica</router-link>
            <router-link to="/info" class="navlink" id="links">Info</router-link>
            <router-link to="/store" class="navlink" id="links">Ponuda</router-link>
            <div class="cartdiv">
            <router-link to="/cart" class="nav-link" id="links"><img class="cart" src="@/assets/carticon.png"></router-link>
            </div>
        </div>
    </div>
  </nav>
</template>

<script>
export default {}

</script>


<style scoped lang="scss">

    @font-face {
            font-family: "Lobster";
            src: url(@/assets/fonts/Lobster\ 1.4.ttf);
    }

    .navbar{
        position: absolute;
        z-index: 2;
        font-weight: bolder;
        width: 100%;
        top: 0;
        --bs-navbar-padding-y: 0;

        .navtxt{
            position: fixed;
            font-size: xx-large;
            right: 0;
            margin-right: 2vh;
            
        }
        
        .navlink{
            font-family: 'Lobster';
            padding: 2vh;
            align-content: center;            
        }

        .navlink:hover{
            background-color: green;
            color: inherit;
        }

        #img{
            margin-left: 1vh;
            width: 7vh;
            padding-top: 2vh;
        }

        .cart{
            padding-top: 2vh;
            margin-left: 1vh;
            margin-right: 1.5vh;
            margin-bottom: 2vh;
            width: 5vh;
        }

        .cartdiv:hover{
            background-color: green;
        }

        
    }
</style>
