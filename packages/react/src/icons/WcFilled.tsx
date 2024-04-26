// This icon file is generated automatically.
import * as React from 'react';
import WcFilledSvg from '@sensoro-design/icons-svg/es/asn/WcFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const WcFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={WcFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(WcFilled);

RefIcon.displayName = 'WcFilled';

export default RefIcon;
