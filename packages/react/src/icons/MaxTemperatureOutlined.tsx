// This icon file is generated automatically.
import * as React from 'react';
import MaxTemperatureOutlinedSvg from '@sensoro-design/icons-svg/es/asn/MaxTemperatureOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MaxTemperatureOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MaxTemperatureOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MaxTemperatureOutlined);

RefIcon.displayName = 'MaxTemperatureOutlined';

export default RefIcon;
