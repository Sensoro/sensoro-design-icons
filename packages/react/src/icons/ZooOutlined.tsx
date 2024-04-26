// This icon file is generated automatically.
import * as React from 'react';
import ZooOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ZooOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ZooOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ZooOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ZooOutlined);

RefIcon.displayName = 'ZooOutlined';

export default RefIcon;
