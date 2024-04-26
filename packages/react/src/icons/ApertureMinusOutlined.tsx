// This icon file is generated automatically.
import * as React from 'react';
import ApertureMinusOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ApertureMinusOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ApertureMinusOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ApertureMinusOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ApertureMinusOutlined);

RefIcon.displayName = 'ApertureMinusOutlined';

export default RefIcon;
