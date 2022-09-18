<template>
    <div class="block">
        <div class="msg">
            <div class="one">Nema proizvoda</div>
            <div class="two">u košarici</div>
        </div>
    </div>
</template>

<script>

export default{}


</script>

<style scoped lang="scss">

    .block{
        text-align: center;
        position: absolute;
        margin-top: 12vh;
        margin-left: 5vh;
        margin-right: 5vh;
        height: 84vh;
        width: 184vh;
        background-color: rgba(0, 0, 0, 35%);
        border-style: solid;

        .msg{
            padding-top: 30vh;

            .one{
                font-size: 10vh;
                font-family: 'Sansita Swashed';
                color: #1FCE00;
                -webkit-text-stroke: 3px black;
            }

            .two{
                font-size: 7vh;
                font-weight: 600;
                color: white;
                -webkit-text-stroke: 2px black;
            }
        }
    }

    .brosura{
        position: absolute;
        width: 55vh;
        margin-top: 15vh;
        margin-left: -89vh;

    }

</style>