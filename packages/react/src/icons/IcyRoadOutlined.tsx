// This icon file is generated automatically.
import * as React from 'react';
import IcyRoadOutlinedSvg from '@sensoro-design/icons-svg/es/asn/IcyRoadOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const IcyRoadOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={IcyRoadOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(IcyRoadOutlined);

RefIcon.displayName = 'IcyRoadOutlined';

export default RefIcon;
