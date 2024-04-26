// This icon file is generated automatically.
import * as React from 'react';
import GarageOutlinedSvg from '@sensoro-design/icons-svg/es/asn/GarageOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const GarageOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={GarageOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(GarageOutlined);

RefIcon.displayName = 'GarageOutlined';

export default RefIcon;
