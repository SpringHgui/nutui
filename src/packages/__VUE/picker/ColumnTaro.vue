<template>
  <view class="nut-picker__list" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
    <view class="nut-picker-roller" ref="roller" :style="touchRollerStyle">
      <view
        class="nut-picker-roller-item"
        :class="{ 'nut-picker-roller-item-hidden': isHidden(index + 1) }"
        v-for="(item, index) in column"
        :style="setRollerStyle(index + 1)"
        :key="item.value ? item.value : index"
      >
        {{ item.text }}
      </view>
    </view>

    <view class="nut-picker-content">
      <view class="nut-picker-list-panel" ref="list" :id="'list' + refRandomId" :style="touchListStyle">
        <view
          :class="['nut-picker-item', 'nut-picker-item-ref', item.className]"
          v-for="(item, index) in column"
          :key="item.value ? item.value : index"
          >{{ item.text }}
        </view>
        <view class="nut-picker-placeholder" v-if="column && column.length === 1"></view>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
import { reactive, ref, watch, computed, toRefs, onMounted, PropType } from 'vue';
import { createComponent } from '../../utils/create';
import { PickerOption, TouchParams } from './types';
import { useTaroRect } from '../../utils/useTaroRect';
const { create } = createComponent('picker-column');
import Taro from '@tarojs/taro';

export default create({
  props: {
    // 当前选中项
    value: [String, Number],
    columnsType: String,
    itemShow: {
      type: Boolean,
      default: false
    },
    column: {
      type: Array as PropType<PickerOption[]>,
      default: () => []
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },

  emits: ['click', 'change'],
  setup(props, { emit }) {
    const wrapper = ref<HTMLElement>();
    const itemref = ref();
    const state = reactive({
      touchParams: {
        startY: 0,
        endY: 0,
        startTime: 0,
        endTime: 0,
        lastY: 0,
        lastTime: 0
      },
      currIndex: 1,
      transformY: 0,
      scrollDistance: 0,
      lineSpacing: 36,
      rotation: 20,
      timer: null
    });

    const roller = ref(null);
    const list = ref(null);
    const listitem = ref(null);

    const touchDeg = ref(0);
    const touchTime = ref(0);
    const touchTranslateY = ref(0);
    const touchListStyle = computed(() => {
      return {
        transition: `transform ${touchTime.value}ms cubic-bezier(0.19, 1, 0.22, 1)`,
        transform: `translate3d(0, ${state.scrollDistance}px, 0)`
      };
    });

    const touchRollerStyle = computed(() => {
      return {
        transition: `transform ${touchTime.value}ms cubic-bezier(0.19, 1, 0.22, 1)`,
        transform: `rotate3d(1, 0, 0, ${touchDeg.value})`
      };
    });

    const onTouchStart = (event: TouchEvent) => {
      event.preventDefault();
      let changedTouches = event.changedTouches[0];
      state.touchParams.startY = changedTouches.pageY;
      state.touchParams.startTime = event.timeStamp || Date.now();
      state.transformY = state.scrollDistance;
    };

    const onTouchMove = (event: TouchEvent) => {
      event.preventDefault();
      let changedTouches = event.changedTouches[0];
      (state.touchParams as TouchParams).lastY = changedTouches.pageY;
      (state.touchParams as TouchParams).lastTime = event.timeStamp || Date.now();
      let move = state.touchParams.lastY - state.touchParams.startY;

      setMove(move);
    };

    const onTouchEnd = (event: TouchEvent) => {
      event.preventDefault();

      let changedTouches = event.changedTouches[0];
      state.touchParams.lastY = changedTouches.pageY;
      state.touchParams.lastTime = event.timeStamp || Date.now();
      let move = state.touchParams.lastY - state.touchParams.startY;

      let moveTime = state.touchParams.lastTime - state.touchParams.startTime;
      if (moveTime <= 300) {
        move = move * 2;
        moveTime = moveTime + 1000;
        setMove(move, 'end', moveTime);
      } else {
        setMove(move, 'end');
      }
    };

    const setRollerStyle = (index: number) => {
      return `transform: rotate3d(1, 0, 0, ${-state.rotation * index}deg) translate3d(0px, 0px, 104px)`;
    };

    const isHidden = (index: number) => {
      if (index >= state.currIndex + 8 || index <= state.currIndex - 8) {
        return true;
      } else {
        return false;
      }
    };

    const setTransform = (translateY = 0, type: string | null, time = 1000, deg: string | number) => {
      if (type === 'end') {
        touchTime.value = time;
      } else {
        touchTime.value = 0;
      }
      touchDeg.value = deg as number;
      touchTranslateY.value = translateY;
      state.scrollDistance = translateY;
    };

    const setMove = (move: number, type?: string, time?: number) => {
      let updateMove = move + state.transformY;
      if (type === 'end') {
        // 限定滚动距离
        if (updateMove > 0) {
          updateMove = 0;
        }
        if (updateMove < -(props.column.length - 1) * state.lineSpacing) {
          updateMove = -(props.column.length - 1) * state.lineSpacing;
        }

        // 设置滚动距离为lineSpacing的倍数值
        let endMove = Math.round(updateMove / state.lineSpacing) * state.lineSpacing;
        let deg = `${(Math.abs(Math.round(endMove / state.lineSpacing)) + 1) * state.rotation}deg`;
        setTransform(endMove, type, time, deg);

        let t = time ? time / 2 : 0;
        (state.timer as any) = setTimeout(() => {
          setChooseValue();
        }, t);

        state.currIndex = Math.abs(Math.round(endMove / state.lineSpacing)) + 1;
      } else {
        let deg = '0deg';
        if (updateMove < 0) {
          deg = `${(Math.abs(updateMove / state.lineSpacing) + 1) * state.rotation}deg`;
        } else {
          deg = `${(-updateMove / state.lineSpacing + 1) * state.rotation}deg`;
        }

        setTransform(updateMove, null, undefined, deg);
        state.currIndex = Math.abs(Math.round(updateMove / state.lineSpacing)) + 1;
      }
    };

    const setChooseValue = () => {
      emit('change', props.column[state.currIndex - 1]);
    };

    const modifyStatus = (type: boolean) => {
      const { column } = props;
      let index = column.findIndex((columnItem) => columnItem.value == props.value);

      state.currIndex = index === -1 ? 1 : (index as number) + 1;
      let move = index === -1 ? 0 : (index as number) * state.lineSpacing;
      type && setChooseValue();
      setMove(-move);
    };

    const getReference = async () => {
      const refe = await useTaroRect(list, Taro);
      state.lineSpacing = refe.height / props.column.length;
      modifyStatus(true);
    };

    watch(
      () => props.column,
      (val) => {
        state.transformY = 0;
        modifyStatus(false);
      },
      {
        deep: true
      }
    );

    watch(
      () => props.itemShow,
      (val) => {
        if (val) {
          setTimeout(() => {
            getReference();
          }, 200);
        }
      },
      {
        deep: true
      }
    );

    onMounted(() => {
      setTimeout(() => {
        getReference();
      }, 200);
    });

    const refRandomId = Math.random().toString(36).slice(-8);

    return {
      ...toRefs(state),
      ...toRefs(props),
      wrapper,
      itemref,
      setRollerStyle,
      isHidden,
      roller,
      list,
      listitem,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      touchRollerStyle,
      touchListStyle,
      setMove,
      refRandomId
    };
  }
});
</script>
