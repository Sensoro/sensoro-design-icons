// This icon file is generated automatically.
import * as React from 'react';
import PowerUpsOutlinedSvg from '@sensoro-design/icons-svg/es/asn/PowerUpsOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PowerUpsOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PowerUpsOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PowerUpsOutlined);

RefIcon.displayName = 'PowerUpsOutlined';

export default RefIcon;
