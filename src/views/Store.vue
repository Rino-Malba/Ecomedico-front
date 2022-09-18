<template>
    <div class="block">
    </div>
    <div class="shop">
        <div class="name">
            Ponuda
        </div>
        <div id="feed">
        <div v-for="product in products" :key="product">
            <div class="title">
                <div class="winename">
                {{product.name}} 
                </div>
                    <br>
                <div class="slike">
                    <img class="slika" :src="product.img" onclick="window.open(this.src)">
                </div>
                    <br>
                <div class="price">
                {{product.price}}
                </div>
            </div>
        </div>
            <!--
            <div class="cart">
                <button
                    @click="updateCart(product, 'subtract')"
                    class="cart__button"
                >
                -
                </button>
                <span class="cart__quantity">{{ product.quantity }}</span>
                <button
                    @click="updateCart(product, 'add')"
                    class="cart__button"
                >
                +
                </button>
                </div> -->
            </div>
        </div>
</template>

<script>

export default{
    data:() => {
        return{
            products: [
            {
                id: 1,
                name: 'Doktorske klompe',
                img: 'https://novi.ba/storage/2018/05/23/thumbs/5b0545f7-4190-42f7-9117-22e70a0a0a67-panda-klompe-kozne-bele-za-bolnice-apoteke-600x600-previewOrg.jpg',
                price: "249,98 kn",
                quantity: 0,
            },
            {
                id: 2,
                name: 'Cipele s čeličnom kapicom',
                img: 'https://h4g7i8e5.rocketcdn.me/wp-content/uploads/2021/03/RADNE-CIPELE-S-KAPICOM.jpg',
                price: "298,50 kn",
                quantity: 0,
            },
            {
                id: 3,
                name: 'Cipele s metalnom kapicom',
                img: 'https://apismarket.hr/image/cache/catalog/Lacuna/cipele/Radne%20cipele%20Maestral-355x355.jpg',

                price: "269,99 kn",
                quantity: 0,
            },
            {
                id: 4,
                name: 'Štake',
                img: 'https://static.wixstatic.com/media/56d563_ef874d97eaa444dd851a299e57e83972~mv2.jpg/v1/fill/w_368,h_492,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/56d563_ef874d97eaa444dd851a299e57e83972~mv2.jpg',
                price: "149,90 kn",
                quantity: 0,
            },
            {
                id: 5,
                name: 'Pojas za leđa',
                img: 'https://static.wixstatic.com/media/56d563_36aa3ec6b4164bf6843cae15b0bad9af~mv2.jpg/v1/fill/w_482,h_420,al_c,lg_1,q_80,enc_auto/56d563_36aa3ec6b4164bf6843cae15b0bad9af~mv2.jpg',

                price: "398,99 kn",
                quantity: 0,
            },
            {
                id: 6,
                name: 'Sklopiva hodalica',
                img: 'https://static.wixstatic.com/media/56d563_4e8c802981f14915941eaf0e50977f4e~mv2.jpg/v1/fill/w_401,h_492,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/56d563_4e8c802981f14915941eaf0e50977f4e~mv2.jpg',
                price: "499,98 kn",
                quantity: 0,
            },
            {
                id: 7,
                name: 'Invalidska kolica',
                img: 'https://www.sveznan.com/wp-content/uploads/2013/02/invacare_invalidska_kolica_new_32.jpg',

                price: "4.479,98 kn",
                quantity: 0,
            },
            ],
        }
    },
    async mounted(){

        let rezultat = await fetch('https://github.com/Rino-Malba/Ecomedico-back/blob/main/src/memory_storage.js');


        let produkt = await rezultat.json();

        for (let item of produkt) {

            console.log(item);
        }
    },
};


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
    }

    .price{
        color: ivory;
        font-size: 2.25vh;
        font-weight: bolder;
        -webkit-text-stroke: black 0.5px;
        background-color: #5f993b;
        text-align: center;
    }

    .price:hover{
        background-color: darkgreen;
        cursor: pointer;
    }

    .winename{
        font-size: x-large;
        font-weight: 700;
        color: ivory;
        -webkit-text-stroke: black 1.5px;
        margin-bottom: 1vh;
        text-align: center;
    }


    .name{
        color: ivory;
        font-size: 6vh;
        font-weight: 500;
        font-family: 'SignikaBold';
        -webkit-text-stroke: black 2px;
    }

    .name:hover{
        color: lightgreen;
    }

    .title{
        margin-top: 2vh;
        float: left;
        text-align: center;
        align-content: center;
        margin-left: 3vh;
        justify-content: center;
    }

    .slike{
        margin-left: 5vh;
        margin-right: 5vh;
    }

    .slika{
        height: 20vh;
        max-width: 20vh;
    }

    .slika:hover{
        cursor: pointer;
    }

    .shop{
        text-align: center;
        position: absolute;
        margin-top: 13vh;
        margin-left: 12vh;
        margin-right: 5vh;
        height: 85vh;
        width: 180vh;
    }

</style>