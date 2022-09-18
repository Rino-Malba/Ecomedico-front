<template>
    <body>
        <div class="bg">
            <img class="img" src="@/assets/images/bg.jpg" alt="">
        </div>
    </body>
</template>

<script>
export default {};

</script>

<style scoped lang="scss">

    .bg{
        z-index: 1;
        display: block;
        margin: 0;
        background-size: contain;
        background-repeat: no-repeat;
        
        .img{
            width: 100%;
            height: 100vh;
        }
    }

    
</style>