// This icon file is generated automatically.
import * as React from 'react';
import JackOutlinedSvg from '@sensoro-design/icons-svg/es/asn/JackOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const JackOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={JackOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(JackOutlined);

RefIcon.displayName = 'JackOutlined';

export default RefIcon;
