// This icon file is generated automatically.
import * as React from 'react';
import SlashOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SlashOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SlashOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SlashOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SlashOutlined);

RefIcon.displayName = 'SlashOutlined';

export default RefIcon;
