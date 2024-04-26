// This icon file is generated automatically.
import * as React from 'react';
import StarOutlinedSvg from '@sensoro-design/icons-svg/es/asn/StarOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const StarOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={StarOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(StarOutlined);

RefIcon.displayName = 'StarOutlined';

export default RefIcon;
