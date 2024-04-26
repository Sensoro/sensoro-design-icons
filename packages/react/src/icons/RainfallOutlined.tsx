// This icon file is generated automatically.
import * as React from 'react';
import RainfallOutlinedSvg from '@sensoro-design/icons-svg/es/asn/RainfallOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RainfallOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RainfallOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RainfallOutlined);

RefIcon.displayName = 'RainfallOutlined';

export default RefIcon;
