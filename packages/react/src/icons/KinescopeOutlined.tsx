// This icon file is generated automatically.
import * as React from 'react';
import KinescopeOutlinedSvg from '@sensoro-design/icons-svg/es/asn/KinescopeOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const KinescopeOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={KinescopeOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(KinescopeOutlined);

RefIcon.displayName = 'KinescopeOutlined';

export default RefIcon;
