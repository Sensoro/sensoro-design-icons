// This icon file is generated automatically.
import * as React from 'react';
import LegendDashedLineOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LegendDashedLineOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LegendDashedLineOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LegendDashedLineOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LegendDashedLineOutlined);

RefIcon.displayName = 'LegendDashedLineOutlined';

export default RefIcon;
