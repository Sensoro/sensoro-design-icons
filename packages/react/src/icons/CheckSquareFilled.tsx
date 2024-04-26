// This icon file is generated automatically.
import * as React from 'react';
import CheckSquareFilledSvg from '@sensoro-design/icons-svg/es/asn/CheckSquareFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CheckSquareFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CheckSquareFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CheckSquareFilled);

RefIcon.displayName = 'CheckSquareFilled';

export default RefIcon;
