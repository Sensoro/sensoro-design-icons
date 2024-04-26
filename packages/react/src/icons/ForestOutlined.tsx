// This icon file is generated automatically.
import * as React from 'react';
import ForestOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ForestOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ForestOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ForestOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ForestOutlined);

RefIcon.displayName = 'ForestOutlined';

export default RefIcon;
