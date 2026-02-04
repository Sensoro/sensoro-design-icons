// This icon file is generated automatically.
import * as React from 'react';
import MinTemperatureOutlinedSvg from '@sensoro-design/icons-svg/es/asn/MinTemperatureOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MinTemperatureOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MinTemperatureOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MinTemperatureOutlined);

RefIcon.displayName = 'MinTemperatureOutlined';

export default RefIcon;
