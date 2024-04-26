// This icon file is generated automatically.
import * as React from 'react';
import PlusSquareFilledSvg from '@sensoro-design/icons-svg/es/asn/PlusSquareFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PlusSquareFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PlusSquareFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PlusSquareFilled);

RefIcon.displayName = 'PlusSquareFilled';

export default RefIcon;
