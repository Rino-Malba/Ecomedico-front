<template>
    <div class="block">
        <div class="msg">
            <div class="name">
                Naslovnica
            </div>
            <div class="txt">
                Ecomedico je web-stranica koja Vam pruža pojedine
                bolničke proizvode po povoljnim cijenama.
            </div>
        </div>
    <div class="pretplata">
        <div class="preporuka">
            Pridruži se listi. <br>
            Ne propusti nove objave!
        </div>
        <input type="text" v-model="email" placeholder="E-mail adresa"/>
        <button id="login" v-on:click="register">Pretplati me</button>
    </div>
    </div>
    <img src="@/assets/images/brosura.jpg" class="brosura">
</template>

<script>

export default{}




</script>

<style scoped lang="scss">

    @font-face {
        font-family: "SignikaBold";
        src: url(@/assets/fonts/Signika-Semibold.ttf);
    }

    @font-face {
        font-family: "SignikaLight";
        src: url(@/assets/fonts/Signika-Light.ttf);
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

            .name{
                font-size: 6vh;
                font-family: 'SignikaBold';
                color: white;
                -webkit-text-stroke: 2px black;
                margin-left: 60vh;
                margin-top: -3vh;
            }

            .txt{
                font-family: 'SignikaBold';
                font-size: 4vh;
                font-weight: 300;
                color: white;
                -webkit-text-stroke: 1.5px black;
                margin-left: 60vh;
            }
        }
    }

    .brosura{
        position: absolute;
        width: 55vh;
        margin-top: 15vh;
        margin-left: -89vh;

    }

    .pretplata{
        height: 30vh;
        margin-top: 25vh;
        margin-left: 130vh;
        margin-right: 10vh;
        text-align: center;
        background-color: #26A31B;
    }

    .preporuka{
        font-family: 'SignikaBold';
        font-size: 3vh;
        letter-spacing: -1px;
        color: #FF9900;
        -webkit-text-stroke: black 1.5px;
        padding-top: 2vh;
        margin-bottom: 3vh;
    }

    .pretplata input{
        width: 300px;
        height: 50px;
        padding-left: 20px;
        display: block;
        margin-bottom: 30px;
        margin-right: auto;
        margin-left: auto;
        border: 5px solid #064F00;
    }
    
    .pretplata input::placeholder{
        text-align: justify;
        font-weight: 700;
        font-size: larger;
        color: black;
    }

    .pretplata button{
        font-size: x-large;
        font-weight: 700;
        width: 20vh;
        height: 50px;
        border: 0px;
        background: #FF9900;
        border: 5px solid #064F00;
        color: black;
        cursor: pointer;
    }
</style>