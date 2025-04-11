export interface VSliderProps {
  // modelValue?: any;
  value?: any;
  id?: string;
  disabled?: boolean;
  min?: number;
  max?: number;
  step?: number;
  orientation?: 'horizontal' | 'vertical';
  direction?: 'ltr' | 'rtl';
  tooltips?: boolean;
  options?: object;
  merge?: number;
  format?: any;
  classes?: object;
  showTooltip?: 'always' | 'focus' | 'drag';
  tooltipPosition?: null | 'top' | 'bottom' | 'left' | 'right';
  lazy?: boolean;
  ariaLabelledby?: string;
  aria?: object;
}