export const varcss = `
// color

// 主色调
$primary-color: #fa2c19 !default;
$primary-color-end: #fa6419 !default;
// 辅助色
$help-color: #f5f5f5 !default;
// 标题常规文字
$title-color: #1a1a1a !default;
// 副标题
$title-color2: #666666 !default;
// 次内容
$text-color: #808080 !default;
// 特殊禁用色
$disable-color: #cccccc !default;
$white: #fff !default;
$black: #000 !default;

// padding
$padding-xs: 12px !default;

$font-family: PingFang SC, Microsoft YaHei, Helvetica, Hiragino Sans GB, SimSun, sans-serif !default;

// ---- Animation ----
$animation-duration: 0.25s !default;
$animation-timing-fun: cubic-bezier(0.55, 0.085, 0.68, 0.53) !default;

// Font
$font-size-0: 10px !default;
$font-size-1: 12px !default;
$font-size-2: 14px !default;
$font-size-3: 16px !default;
$font-size-4: 18px !default;
$font-weight-bold: 400 !default;

$font-size-small: $font-size-1 !default;
$font-size-base: $font-size-2 !default;
$font-size-large: $font-size-3 !default;
$line-height-base: 1.5 !default;

// button
$button-border-radius: 25px !default;
$button-border-width: 1px !default;
$button-default-bg-color: $white !default;
$button-default-border-color: rgba(204, 204, 204, 1) !default;
$button-default-color: rgba(102, 102, 102, 1) !default;
$button-small-height: 28px !default;
$button-mini-height: 24px !default;
$button-default-height: 38px !default;
$button-large-height: 48px !default;
$button-large-line-height: 46px !default;
$button-small-line-height: 26px !default;
$button-block-height: 48px !default;
$button-default-line-height: 36px !default;
$button-block-line-height: 46px !default;
$button-default-font-size: $font-size-2 !default;
$button-disabled-opacity: 0.68 !default;
$button-primary-color: $white !default;
$button-primary-border-color: $primary-color !default;
$button-primary-background-color: linear-gradient(135deg, $primary-color 0%, $primary-color-end 100%) !default;
$button-info-color: $white !default;
$button-info-border-color: rgba(73, 106, 242, 1) !default;
$button-info-background-color: linear-gradient(315deg, rgba(73, 143, 242, 1) 0%, rgba(73, 101, 242, 1) 100%) !default;
$button-success-color: $white !default;
$button-success-border-color: rgba(38, 191, 38, 1) !default;
$button-success-background-color: linear-gradient(
  135deg,
  rgba(38, 191, 38, 1) 0%,
  rgba(39, 197, 48, 1) 45%,
  rgba(40, 207, 63, 1) 83%,
  rgba(41, 212, 70, 1) 100%
) !default;

$button-danger-color: $white !default;
$button-danger-border-color: rgba(250, 44, 25, 1) !default;
$button-danger-background-color: rgba(250, 44, 25, 1) !default;
$button-warning-color: $white !default;
$button-warning-border-color: rgba(255, 158, 13, 1) !default;
$button-warning-background-color: linear-gradient(
  135deg,
  rgba(255, 158, 13, 1) 0%,
  rgba(255, 167, 13, 1) 45%,
  rgba(255, 182, 13, 1) 83%,
  rgba(255, 190, 13, 1) 100%
) !default;
$button-plain-background-color: #fff !default;
$button-plain-background-color: $white !default;

// cell

$cell-color: $title-color2 !default;
$cell-title-font: $font-size-2 !default;
$cell-title-desc-font: $font-size-1 !default;
$cell-desc-font: $font-size-2 !default;
$cell-desc-color: $disable-color !default;
$cell-border-radius: 6px !default;

// cell-group

$cell-group-title-padding: 0 10px !default;
$cell-group-title-color: #909ca4 !default;
$cell-group-title-font-size: $font-size-2 !default;
$cell-group-title-line-height: 20px !default;
$cell-group-desc-padding: 0 10px !default;
$cell-group-desc-color: #909ca4 !default;
$cell-group-desc-font-size: $font-size-1 !default;
$cell-group-desc-line-height: 16px !default;
$cell-group-background-color: $white !default;

// icon

$icon-height: 20px !default;
$icon-width: 20px !default;
$icon-line-height: 20px !default;

// uploader

$uploader-picture-width: 100px !default;
$uploader-picture-height: 100px !default;
$uploader-background: #f7f8fa !default;

// picker
$picker-cancel-color: $primary-color !default;

//input
$input-border-bottom: #eaf0fb !default;
$input-disabled-color: #c8c9cc !default;
$input-require-color: $primary-color !default;
$input-font-size: $font-size-2 !default;

// textarea

$textarea-font: $font-size-2 !default;
$textarea-height: 100px !default;
$textarea-limit-color: $text-color !default;
$textarea-text-color: $title-color !default;
$textarea-disabled-color: $disable-color !default;

// inputnumber

$inputnumber-icon-color: $title-color !default;
$inputnumber-icon-void-color: $disable-color !default;
$inputnumber-input-background-color: $help-color !default;
$inputnumber-input-border-radius: 4px !default;
$inputnumber-input-width: 40px !default;
$inputnumber-icon-size: 20px !default;

// actionsheet
$actionsheet-light-color: #f6f6f6 !default;

//shortpassword
$shortpassword-background-color: rgba(245, 245, 245, 1) !default;
$shortpassword-border-color: #ddd !default;
$shortpassword-error: $primary-color !default;
$shortpassword-forget: rgba(128, 128, 128, 1) !default;

//large price
$price-symbol-big-size: 18px !default;
$price-big-size: 24px !default;
$price-decimal-big-size: 18px !default;

//normal price
$price-symbol-medium-size: 14px !default;
$price-medium-size: 16px !default;
$price-decimal-medium-size: 14px !default;

// small price
$price-symbol-small-size: 10px !default;
$price-small-size: 12px !default;
$price-decimal-small-size: 10px !default;

//avatar
$avatar-square: 5px !default;
$avatar-large-width: 60px !default;
$avatar-large-height: 60px !default;
$avatar-small-width: 32px !default;
$avatar-small-height: 32px !default;
$avatar-normal-width: 40px !default;
$avatar-normal-height: 40px !default;

//switch
$switch-close-bg-color: #ebebeb !default;
$switch-close--cline-bg-color: #f0f0f0 !default;

//backtop
$backtop-border-color: #e0e0e0 !default;

// calendar
$calendar-primary-color: $primary-color !default;
$calendar-choose-color: #fef6f6 !default;
$calendar-base-color: #333333 !default;
$calendar-disable-color: #d1d0d0 !default;
$calendar-title-font: $font-size-4 !default;
$calendar-base-font: $font-size-3 !default;
$calendar-text-font: $font-size-1 !default;
$calendar-day-font: 18px !default;

//overlay
$overlay-bg-color: rgba(0, 0, 0, 0.7) !default;

//popup
$popup-close-icon-margin: 16px !default;
$popup-border-radius: 20px !default;

// Notify
$notify-text-color: $white !default;
$notify-padding: 12px 0 !default;
$notify-font-size: 14px !default;
$notify-height: 44px !default;
$notify-base-background-color: linear-gradient(
  135deg,
  rgba(250, 44, 25, 1) 0%,
  rgba(250, 63, 25, 1) 45%,
  rgba(250, 89, 25, 1) 83%,
  rgba(250, 100, 25, 1) 100%
) !default;
$notify-primary-background-color: linear-gradient(
  315deg,
  rgba(73, 143, 242, 1) 0%,
  rgba(73, 101, 242, 1) 100%
) !default;
$notify-success-background-color: linear-gradient(
  135deg,
  rgba(38, 191, 38, 1) 0%,
  rgba(39, 197, 48, 1) 45%,
  rgba(40, 207, 63, 1) 83%,
  rgba(41, 212, 70, 1) 100%
) !default;
$notify-danger-background-color: rgba(250, 50, 25, 1) !default;
$notify-warning-background-color: linear-gradient(135deg, rgba(255, 93, 13, 1) 0%, rgba(255, 154, 13, 1) 100%) !default;

// rate
$rate-icon-color: $primary-color !default;
$rate-icon-void-color: $disable-color !default;

// tabbar
$tabbar-active-color: $primary-color !default;
$tabbar-border-color: #eee !default;

//infiniteloading
$infinite-bottom-color: #c8c8c8 !default;

//range
$range-max: #333333 !default;
$rang-bg-color: rgba($primary-color, 0.5) !default;
$rang-bar-bg-color: linear-gradient(135deg, $primary-color 0%, $primary-color-end 100%) !default;

//address
$address-region-tab-line: linear-gradient(90deg, $primary-color 0%, rgba($primary-color, 0.15) 100%) !default;
$address-icon-color: $primary-color !default;

//steps
$step-wait-bg-color: #959fb1 !default;

// dialog
$dialog-width: 296px !default;

// checkbox
$checkbox-label-color: #1d1e1e !default;
$checkbox-label-disable-color: #999 !default;
$checkbox-icon-disable-color: #d6d6d6 !default;

//radio
$radio-label-font-color: #1d1e1e !default;
$radio-label-font-active-color: $primary-color !default;
$radio-label-disable-color: #999 !default;
$radio-icon-disable-color: #d6d6d6 !default;
$radio-label-button-border-color: $primary-color !default;
$radio-label-button-background: rgba($primary-color, 0.05) !default;

//fixednav
$fixednav-bg-color: $white !default;
$fixednav-font-color: $black !default;
$fixednav-index: 201 !default;
$fixednav-btn-bg: linear-gradient(135deg, $primary-color 0%, $primary-color-end 100%) !default;

// NoticeBar
$noticebar-font-size: 14px !default;
$noticebar-height: 40px !default;
$noticebar-line-height: 24px !default;
$noticebar-left-icon-width: 16px !default;
$noticebar-right-icon-width: 16px !default;

// TimeSelect
$timeselect-title-font-size: $font-size-2 !default;
$timeselect-title-color: $title-color !default;
$timeselect-pannel-bg-color: #f6f7f9 !default;

// TimePannel
$timepannel-text-color: $title-color2 !default;
$timepannel-font-size: $font-size-2 !default;
$timepannel-cur-bg-color: $white !default;
$timepannel-cur-text-color: #333333 !default;

// TimeDetail
$timedetail-item-bg-color: #f6f7f9 !default;
$timedetail-item-border-radius: 5px !default;
$timedetail-item-text-color: #333333 !default;
$timedetail-item-text-font-size: $font-size-2 !default;
$timedetail-item-cur-bg-color: rgba($primary-color, 0.15) !default;
$timedetail-item-cur-border: $primary-color !default;
$timedetail-item-cur-text-color: $primary-color !default;
$timedetail-time-text-color: #999 !default;
$timedetail-time-font-size: $font-size-1 !default;

//tag
$tag-font-size: 12px !default;
$tag-default-border-radius: 4px !default;
$tag-round-border-radius: 8px !default;
$tag-default-background-color: #000000 !default;
$tag-primary-background-color: #3460fa !default;
$tag-success-background-color: #4fc08d !default;
$tag-danger-background-color: linear-gradient(
  135deg,
  rgba(242, 20, 12, 1) 0%,
  rgba(232, 34, 14, 1) 69.83950099728881%,
  rgba(242, 77, 12, 1) 100%
) !default;
$tag-warning-background-color: #f3812e !default;
$tag-default-color: #ffffff !default;
$tag-border-width: 1px !default;
$tag-plain-background-color: #fff !default;

//badge
$badge-background-color: linear-gradient(135deg, $primary-color 0%, $primary-color-end 100%) !default;
$badge-font-size: $font-size-1 !default;
$badge-default-background-color: rgba(255, 255, 255, 1) !default;

//popover
$popover-white-background-color: rgba(255, 255, 255, 1) !default;
$popover-dark-background-color: rgba(75, 76, 77, 1) !default;
$popover-border-bottom-color: rgba(229, 229, 229, 1) !default;
$popover-primary-text-color: rgba(51, 51, 51, 1) !default;
$popover-disable-color: rgba(154, 155, 157, 1) !default;

//progress
$progress-inner-background-color: linear-gradient(135deg, $primary-color 0%, $primary-color-end 100%) !default;
$progress-insidetext-background: $primary-color !default;

//pagination
$pagination-color: $primary-color !default;
$pagination-font-size: $font-size-2 !default;
$pagination-item-border-color: #e4e7eb !default;
$pagination-active-background-color: linear-gradient(135deg, $primary-color 0%, $primary-color-end 100%) !default;
$pagination-disable-color: rgba(116, 116, 116, 0.31) !default;
$pagination-disable-background-color: #f7f8fa !default;
$pagination-item-border-width: 1px !default;
$pagination-item-border-radius: 2px !default;
$pagination-prev-next-padding: 0 11px !default;

// tabs
$tabs-tab-smile-color: $primary-color !default;
$tabs-titles-border-radius: 0 !default;
$tabs-titles-item-large-font-size: $font-size-3 !default;
$tabs-titles-item-font-size: $font-size-2 !default;
$tabs-titles-item-small-font-size: $font-size-1 !default;
$tabs-titles-item-color: $title-color !default;
$tabs-titles-background-color: $help-color !default;
$tabs-horizontal-tab-line-color: linear-gradient(90deg, $primary-color 0%, rgba($primary-color, 0.15) 100%) !default;
$tabs-horizontal-titles-height: 46px !default;
$tabs-horizontal-titles-item-min-width: 50px !default;
$tabs-horizontal-titles-item-active-line-width: 40px !default;
$tabs-vertical-tab-line-color: linear-gradient(180deg, $primary-color 0%, rgba($primary-color, 0.15) 100%) !default;
$tabs-vertical-titles-item-height: 40px !default;
$tabs-vertical-titles-item-active-line-height: 14px !default;
$tabs-vertical-titles-width: 100px !default;

// indicator
$indicator-color: $primary-color !default;
$indicator-dot-color: $disable-color !default;
$indicator-white: $white !default;
$indicator-size: 18px !default;
$indicator-dot-size: $indicator-size / 3 !default;
$indicator-border-size: $indicator-size + 2 !default;

// menu
$menu-bar-line-height: 46px !default;
$menu-item-active-text-color: $primary-color !default;
$menu-bar-border-bottom-color: #eaf0fb !default;
$menu-bar-opened-z-index: 2001 !default;
$menu-item-disabled-color: #969799 !default;
$menu-title-text-padding-left: 8px !default;
$menu-title-text-padding-right: 8px !default;
$menu-item-content-padding: 12px 24px !default;
$menu-item-content-max-height: 214px !default;
$menu-item-option-padding-top: 12px !default;
$menu-item-option-padding-bottom: 12px !default;
$menu-item-option-i-margin-right: 6px !default;

// searchbar
$searchbar-background: $white !default;
$searchbar-input-background: #f7f7f7 !default;
$searchbar-right-out-color: $black !default;

// empty
$empty-padding: 32px 0;
$empty-image-size: 170px;
$empty-description-margin-top: 4px;
$empty-description-color: #666666;
$empty-description-font-size: 14px;
$empty-description-line-height: 20px;
$empty-description-padding: 0 40px;

// cascader
$cascader-font-size: $font-size-2;
$cascader-line-height: 22px;
$cascader-tabs-item-padding: 0 10px;
$cascader-bar-padding: 24px 20px 17px;
$cascader-bar-font-size: $font-size-4;
$cascader-bar-line-height: 20px;
$cascader-bar-color: $title-color;
$cascader-item-padding: 10px 20px;
$cascader-item-color: $title-color;
$cascader-item-font-size: $font-size-2;
$cascader-item-active-color: $primary-color;

// form
$form-item-error-line-color: $primary-color !default;
$form-item-required-color: $primary-color !default;
$form-item-error-message-color: $primary-color !default;

// sku
$sku-item-border: 1px solid $primary-color !default;
$sku-item-disable-line: line-through !default;
$sku-opetate-bg-default: linear-gradient(90deg, $primary-color, $primary-color-end 100%) !default;
$sku-item-active-bg: rgba($primary-color, 0.15) !default;
$sku-opetate-bg-buy: linear-gradient(
  135deg,
  rgba(255, 186, 13, 1) 0%,
  rgba(255, 195, 13, 1) 69%,
  rgba(255, 207, 13, 1) 100%
) !default;

// card
$card-font-size-0: $font-size-0;
$card-font-size-1: $font-size-1;
$card-font-size-2: $font-size-2;
$card-font-size-3: $font-size-3;

// grid
$grid-border-color: #f5f6f7 !default;
$grid-item-content-padding: 16px 8px !default;
$grid-item-content-bg-color: $white !default;
$grid-item-text-margin: 8px !default;
$grid-item-text-color: $title-color2 !default;
$grid-item-text-font-size: $font-size-1 !default;

// table
$table-border-color: #ececec;
$table-cols-padding: 10px;
$table-tr-even-bg-color: #f3f3f3;
$table-tr-odd-bg-color: $white;

// sidenavbar
$sidenavbar-content-bg-color: $white !default;

// subsidenavbar
$subsidenavbar-title-border-color: #f6f6f6 !default;
$subsidenavbar-title-bg-color: #f6f6f6 !default;

// sidenavbaritem
$sidenavbaritem-title-color: $white !default;

@import './mixins/index';
@import './animation/index';


`;
