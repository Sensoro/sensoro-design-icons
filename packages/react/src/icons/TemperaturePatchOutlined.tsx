// This icon file is generated automatically.
import * as React from 'react';
import TemperaturePatchOutlinedSvg from '@sensoro-design/icons-svg/es/asn/TemperaturePatchOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const TemperaturePatchOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={TemperaturePatchOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(TemperaturePatchOutlined);

RefIcon.displayName = 'TemperaturePatchOutlined';

export default RefIcon;
