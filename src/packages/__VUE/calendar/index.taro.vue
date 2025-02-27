<template>
  <nut-popup
    v-if="poppable"
    v-model:visible="show"
    position="bottom"
    round
    closeable
    @click-overlay="closePopup"
    @click-close-icon="closePopup"
    :style="{ height: '85vh' }"
  >
    <nut-calendar-item
      ref="calendarRef"
      :type="type"
      :is-auto-back-fill="isAutoBackFill"
      :poppable="poppable"
      :title="title"
      :default-value="defaultValue"
      :start-date="startDate"
      :end-date="endDate"
      @update="update"
      @close="close"
      @choose="choose"
      @select="select"
      v-if="show"
      :confirm-text="confirmText"
      :start-text="startText"
      :end-text="endText"
      :show-today="showToday"
      :show-title="showTitle"
      :show-sub-title="showSubTitle"
    >
      <template v-slot:btn v-if="showTopBtn">
        <slot name="btn"> </slot>
      </template>
      <template v-slot:day="date" v-if="dayInfo">
        <slot name="day" :date="date.date"> </slot>
      </template>
      <template v-slot:topInfo="date" v-if="topInfo">
        <slot name="topInfo" :date="date.date"> </slot>
      </template>
      <template v-slot:bottomInfo="date" v-if="bottomInfo">
        <slot name="bottomInfo" :date="date.date"> </slot>
      </template>
    </nut-calendar-item>
  </nut-popup>

  <nut-calendar-item
    v-else
    :type="type"
    :is-auto-back-fill="isAutoBackFill"
    :poppable="poppable"
    :title="title"
    :confirm-text="confirmText"
    :start-text="startText"
    :end-text="endText"
    :default-value="defaultValue"
    :start-date="startDate"
    :end-date="endDate"
    @close="close"
    @choose="choose"
    @select="select"
    :show-title="showTitle"
    :show-sub-title="showSubTitle"
    :show-today="showToday"
  >
    <template v-slot:btn v-if="showTopBtn">
      <slot name="btn"> </slot>
    </template>
    <template v-slot:day="date" v-if="dayInfo">
      <slot name="day" :date="date.date"> </slot>
    </template>
    <template v-slot:topInfo="date" v-if="topInfo">
      <slot name="topInfo" :date="date.date"> </slot>
    </template>
    <template v-slot:bottomInfo="date" v-if="bottomInfo">
      <slot name="bottomInfo" :date="date.date"> </slot>
    </template>
  </nut-calendar-item>
</template>
<script lang="ts">
import { ref, watch, computed } from 'vue';
import { createComponent } from '../../utils/create';
const { create } = createComponent('calendar');
import CalendarItem from '../calendaritem/index.taro.vue';
import Utils from '../../utils/date';
export default create({
  components: {
    [CalendarItem.name]: CalendarItem
  },
  props: {
    type: {
      type: String,
      default: 'one'
    },
    isAutoBackFill: {
      type: Boolean,
      default: false
    },
    poppable: {
      type: Boolean,
      default: true
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    showSubTitle: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: false
    },
    showToday: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: '日历选择'
    },
    confirmText: {
      type: String,
      default: '确认'
    },
    startText: {
      type: String,
      default: '开始'
    },
    endText: {
      type: String,
      default: '结束'
    },
    defaultValue: {
      type: [String, Array]
    },
    startDate: {
      type: String,
      default: Utils.getDay(0)
    },
    endDate: {
      type: String,
      default: Utils.getDay(365)
    }
  },
  emits: ['choose', 'close', 'update:visible', 'select'],
  setup(props, { emit, slots }) {
    const showTopBtn = computed(() => {
      return slots.btn;
    });
    const topInfo = computed(() => {
      return slots.topInfo;
    });
    const dayInfo = computed(() => {
      return slots.day;
    });
    const bottomInfo = computed(() => {
      return slots.bottomInfo;
    });
    let show = ref(props.visible);
    // element refs
    const calendarRef = ref<null | HTMLElement>(null);

    // methods
    const update = () => {
      show.value = false;
      emit('update:visible', false);
    };

    const close = () => {
      show.value = false;
      emit('close');
      emit('update:visible', false);
    };

    const choose = (param: string) => {
      close();
      emit('choose', param);
    };

    const closePopup = () => {
      close();
    };
    const select = (param: string) => {
      // close();
      emit('select', param);
    };
    watch(
      () => props.visible,
      (value: boolean) => {
        show.value = value;
      }
    );

    return {
      show,
      closePopup,
      update,
      close,
      select,
      choose,
      calendarRef,
      showTopBtn,
      topInfo,
      dayInfo,
      bottomInfo
    };
  }
});
</script>
