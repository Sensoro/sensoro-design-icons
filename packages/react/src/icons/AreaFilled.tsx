// This icon file is generated automatically.
import * as React from 'react';
import AreaFilledSvg from '@sensoro-design/icons-svg/es/asn/AreaFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AreaFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AreaFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AreaFilled);

RefIcon.displayName = 'AreaFilled';

export default RefIcon;
