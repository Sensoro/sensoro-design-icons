// This icon file is generated automatically.
import * as React from 'react';
import BlockOutlinedSvg from '@sensoro-design/icons-svg/es/asn/BlockOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const BlockOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={BlockOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(BlockOutlined);

RefIcon.displayName = 'BlockOutlined';

export default RefIcon;
