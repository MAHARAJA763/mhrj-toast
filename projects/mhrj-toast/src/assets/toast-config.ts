export declare type toastType = 'normal' | 'success' | 'error' | 'warning';
export declare type toastHorizontalPosition = 'center' | 'left' | 'right';
export declare type toastVerticalPosition = 'top' | 'bottom';
export declare type toastScrollFrom = 'top' | 'bottom' | 'left' | 'right';
export declare type toastScrollTo = 'top' | 'bottom' | 'left' | 'right';
export class ToastConfig
{
  message?: string;
  panelClass?: string;
  horizontalPosition?: toastHorizontalPosition;
  verticalPosition?: toastVerticalPosition;
  toastType?: toastType;
  scrollFrom?: toastScrollFrom;
  scrollTo?: toastScrollTo;
}
