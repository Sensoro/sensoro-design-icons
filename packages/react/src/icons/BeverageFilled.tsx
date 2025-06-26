// This icon file is generated automatically.
import * as React from 'react';
import BeverageFilledSvg from '@sensoro-design/icons-svg/es/asn/BeverageFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const BeverageFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={BeverageFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(BeverageFilled);

RefIcon.displayName = 'BeverageFilled';

export default RefIcon;
