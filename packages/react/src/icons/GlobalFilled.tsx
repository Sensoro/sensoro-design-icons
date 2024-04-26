// This icon file is generated automatically.
import * as React from 'react';
import GlobalFilledSvg from '@sensoro-design/icons-svg/es/asn/GlobalFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const GlobalFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={GlobalFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(GlobalFilled);

RefIcon.displayName = 'GlobalFilled';

export default RefIcon;
