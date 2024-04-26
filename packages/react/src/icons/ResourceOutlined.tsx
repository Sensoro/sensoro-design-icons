// This icon file is generated automatically.
import * as React from 'react';
import ResourceOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ResourceOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ResourceOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ResourceOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ResourceOutlined);

RefIcon.displayName = 'ResourceOutlined';

export default RefIcon;
