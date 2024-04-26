// This icon file is generated automatically.
import * as React from 'react';
import AlignLeftOutlinedSvg from '@sensoro-design/icons-svg/es/asn/AlignLeftOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AlignLeftOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AlignLeftOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AlignLeftOutlined);

RefIcon.displayName = 'AlignLeftOutlined';

export default RefIcon;
