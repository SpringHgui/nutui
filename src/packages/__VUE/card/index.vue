<template>
  <div class="nut-card">
    <div class="nut-card__left">
      <img :src="imgUrl" alt="" />
    </div>
    <div class="nut-card__right">
      <div class="nut-card__right__title">{{ title }}</div>
      <slot name="prolist"></slot>
      <div class="nut-card__right__price">
        <nut-price :price="price"></nut-price>
        <template v-if="isHaveSlot('origin')">
          <slot name="origin"></slot>
        </template>
        <nut-price v-else class="nut-card__right__price__origin" :price="vipPrice"></nut-price>
      </div>
      <div class="nut-card__right__other">
        <template v-if="isHaveSlot('shop-tag')">
          <slot name="shop-tag"></slot>
        </template>
        <template v-else>
          <nut-tag type="danger">{{ shopDesc }}</nut-tag>
          <nut-tag plain>{{ delivery }}</nut-tag>
        </template>
      </div>
      <div class="nut-card__right__shop">
        <div class="nut-card__right__shop__name">{{ shopName }}</div>
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, reactive } from 'vue';
import { createComponent } from '../../utils/create';
const { create } = createComponent('card');
export default create({
  props: {
    imgUrl: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: ''
    },
    vipPrice: {
      type: String,
      default: ''
    },
    shopDesc: {
      type: String,
      default: ''
    },
    delivery: {
      type: String,
      default: ''
    },
    shopName: {
      type: String,
      default: ''
    }
  },

  setup(props, { emit, slots }) {
    // console.log(slots['origin']);

    const isHaveSlot = (slot: string) => {
      return slots[slot];
    };

    return {
      isHaveSlot
    };
  }
});
</script>
