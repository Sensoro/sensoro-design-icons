// This icon file is generated automatically.
import * as React from 'react';
import RocketOutlinedSvg from '@sensoro-design/icons-svg/es/asn/RocketOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RocketOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RocketOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RocketOutlined);

RefIcon.displayName = 'RocketOutlined';

export default RefIcon;
