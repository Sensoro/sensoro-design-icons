// This icon file is generated automatically.
import * as React from 'react';
import SquareFilledSvg from '@sensoro-design/icons-svg/es/asn/SquareFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SquareFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SquareFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SquareFilled);

RefIcon.displayName = 'SquareFilled';

export default RefIcon;
