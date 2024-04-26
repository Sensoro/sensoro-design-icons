// This icon file is generated automatically.
import * as React from 'react';
import RainstormOutlinedSvg from '@sensoro-design/icons-svg/es/asn/RainstormOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RainstormOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RainstormOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RainstormOutlined);

RefIcon.displayName = 'RainstormOutlined';

export default RefIcon;
