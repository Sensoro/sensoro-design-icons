// This icon file is generated automatically.
import * as React from 'react';
import PointOutlinedSvg from '@sensoro-design/icons-svg/es/asn/PointOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PointOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PointOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PointOutlined);

RefIcon.displayName = 'PointOutlined';

export default RefIcon;
