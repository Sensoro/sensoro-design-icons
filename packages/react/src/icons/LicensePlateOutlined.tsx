// This icon file is generated automatically.
import * as React from 'react';
import LicensePlateOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LicensePlateOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LicensePlateOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LicensePlateOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LicensePlateOutlined);

RefIcon.displayName = 'LicensePlateOutlined';

export default RefIcon;
