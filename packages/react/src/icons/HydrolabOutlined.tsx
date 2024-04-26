// This icon file is generated automatically.
import * as React from 'react';
import HydrolabOutlinedSvg from '@sensoro-design/icons-svg/es/asn/HydrolabOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const HydrolabOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={HydrolabOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(HydrolabOutlined);

RefIcon.displayName = 'HydrolabOutlined';

export default RefIcon;
