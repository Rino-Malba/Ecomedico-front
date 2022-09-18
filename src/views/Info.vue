<template>
    <div class="block">
        <div class="msg">
            <div class="name">
                Informacije
            </div>
            <div class="txt">
                Mi smo tvrtka koja proizvodi oropedska pomagala poput 
                štaki, kolica i slično. Za sve koje je potrebno.
                <br>
                <br>
                <div class="info">Tel:</div> 052 / 579 - 268
                <br>
                <div class="info">Lokacija:</div> Buje
                <br>
                <div class="info">E-mail:</div> ecomedico.vjt@gmail.com
            </div>
        </div>
    </div>
    <div>
        <img class="map" src="@/assets/images/place.png">
    </div>
    <div>
        <img class="arrow" src="@/assets/images/arrow.png">
    </div>

</template>

<script>

export default{}


</script>

<style scoped lang="scss">

    @font-face {
        font-family: "SignikaBold";
        src: url(@/assets/fonts/Signika-Semibold.ttf);
    }

    .block{
        text-align: left;
        position: absolute;
        margin-top: 12vh;
        margin-left: 5vh;
        margin-right: 5vh;
        height: 84vh;
        width: 184vh;
        background-color: rgba(0, 0, 0, 35%);
        border-style: solid;


        .msg{
            padding-top: 5vh;
            margin-left: 5vh;

            .name{
                font-size: 6vh;
                font-family: 'SignikaBold';
                color: white;
                -webkit-text-stroke: 2px black;
                margin-top: -3vh;
            }

            .txt{
                line-height: 7vh;
                margin-top: 2vh;
                font-family: 'SignikaBold';
                font-size: 3.5vh;
                font-weight: 300;
                color: white;
                -webkit-text-stroke: 1.5px black;
            }

            .info{
                color: green;
            }
        }
    }

    .map{
        position: fixed;
        margin-top: 35vh;
        margin-left: -15vh;
        width: 90vh;
    }

    .arrow{
        position: fixed;
        margin-top: 54vh;
        margin-left: 33vh;
        width: 5vh;
    }

</style>