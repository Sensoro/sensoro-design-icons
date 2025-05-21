// This icon file is generated automatically.
import * as React from 'react';
import AiOutlinedSvg from '@sensoro-design/icons-svg/es/asn/AiOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AiOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AiOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AiOutlined);

RefIcon.displayName = 'AiOutlined';

export default RefIcon;
