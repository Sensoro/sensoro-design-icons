// This icon file is generated automatically.
import * as React from 'react';
import ParabolicOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ParabolicOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ParabolicOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ParabolicOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ParabolicOutlined);

RefIcon.displayName = 'ParabolicOutlined';

export default RefIcon;
