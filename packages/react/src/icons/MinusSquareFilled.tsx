// This icon file is generated automatically.
import * as React from 'react';
import MinusSquareFilledSvg from '@sensoro-design/icons-svg/es/asn/MinusSquareFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MinusSquareFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MinusSquareFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MinusSquareFilled);

RefIcon.displayName = 'MinusSquareFilled';

export default RefIcon;
