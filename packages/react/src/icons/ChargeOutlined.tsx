// This icon file is generated automatically.
import * as React from 'react';
import ChargeOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ChargeOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ChargeOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ChargeOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ChargeOutlined);

RefIcon.displayName = 'ChargeOutlined';

export default RefIcon;
