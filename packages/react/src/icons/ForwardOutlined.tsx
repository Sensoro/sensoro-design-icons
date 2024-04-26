// This icon file is generated automatically.
import * as React from 'react';
import ForwardOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ForwardOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ForwardOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ForwardOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ForwardOutlined);

RefIcon.displayName = 'ForwardOutlined';

export default RefIcon;
