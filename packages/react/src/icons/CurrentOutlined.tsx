// This icon file is generated automatically.
import * as React from 'react';
import CurrentOutlinedSvg from '@sensoro-design/icons-svg/es/asn/CurrentOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CurrentOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CurrentOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CurrentOutlined);

RefIcon.displayName = 'CurrentOutlined';

export default RefIcon;
