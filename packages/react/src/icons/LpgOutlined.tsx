// This icon file is generated automatically.
import * as React from 'react';
import LpgOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LpgOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LpgOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LpgOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LpgOutlined);

RefIcon.displayName = 'LpgOutlined';

export default RefIcon;
