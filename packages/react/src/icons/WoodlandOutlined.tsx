// This icon file is generated automatically.
import * as React from 'react';
import WoodlandOutlinedSvg from '@sensoro-design/icons-svg/es/asn/WoodlandOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const WoodlandOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={WoodlandOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(WoodlandOutlined);

RefIcon.displayName = 'WoodlandOutlined';

export default RefIcon;
