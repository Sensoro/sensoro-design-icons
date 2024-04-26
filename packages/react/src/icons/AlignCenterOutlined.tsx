// This icon file is generated automatically.
import * as React from 'react';
import AlignCenterOutlinedSvg from '@sensoro-design/icons-svg/es/asn/AlignCenterOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AlignCenterOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AlignCenterOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AlignCenterOutlined);

RefIcon.displayName = 'AlignCenterOutlined';

export default RefIcon;
