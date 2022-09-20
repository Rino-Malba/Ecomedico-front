<template>
    <div class="product">
      <img :src="'/dist/' + product.image" class="image">
      <p class="title">{{product.title}}</p>
      <p class="price">
        <span>$ {{product.price}}</span>
        <span class="qty" v-if="qtyInCart > 0">x{{qtyInCart}}</span>
      </p>
      <div class="controls">
        <button class="add-btn" @click="addToCart" v-if="qtyInCart == 0">ADD TO CART</button>
        <div class="clearfix" v-else>
          <button class="inc" @click="inc">+</button>
          <button class="dec" @click="dec">-</button>
        </div>
      </div>
    </div>
  </template>
  <script>
    import _ from 'lodash'
    import State from '../shoppingCartState'
    export default {
      props: ['product'],
      data() {
        return {
          shared: State.data
        }
      },
      methods: {
        addToCart () {
          State.add(this.product)
        },
        inc () {
          State.inc(this.product)
        },
        dec () {
          State.dec(this.product)
        }
      },
      computed: {
        qtyInCart () {
          // check for product in cart state
          var found = _.find(this.shared.cart, ['id', this.product.id])
          if(typeof found == 'object') {
            return found.qty
          } else {
            return 0
          }
        }
      }
    }
  </script>