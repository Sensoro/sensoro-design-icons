// This icon file is generated automatically.
import * as React from 'react';
import PlusCircleFilledSvg from '@sensoro-design/icons-svg/es/asn/PlusCircleFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PlusCircleFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PlusCircleFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PlusCircleFilled);

RefIcon.displayName = 'PlusCircleFilled';

export default RefIcon;
