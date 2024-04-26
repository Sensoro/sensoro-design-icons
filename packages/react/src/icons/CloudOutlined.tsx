// This icon file is generated automatically.
import * as React from 'react';
import CloudOutlinedSvg from '@sensoro-design/icons-svg/es/asn/CloudOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CloudOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CloudOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CloudOutlined);

RefIcon.displayName = 'CloudOutlined';

export default RefIcon;
