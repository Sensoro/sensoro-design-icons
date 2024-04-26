// This icon file is generated automatically.
import * as React from 'react';
import LegendLineOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LegendLineOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LegendLineOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LegendLineOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LegendLineOutlined);

RefIcon.displayName = 'LegendLineOutlined';

export default RefIcon;
