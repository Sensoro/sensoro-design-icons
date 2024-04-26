// This icon file is generated automatically.
import * as React from 'react';
import PigeonholeFilledSvg from '@sensoro-design/icons-svg/es/asn/PigeonholeFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PigeonholeFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PigeonholeFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PigeonholeFilled);

RefIcon.displayName = 'PigeonholeFilled';

export default RefIcon;
