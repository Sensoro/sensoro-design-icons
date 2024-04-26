// This icon file is generated automatically.
import * as React from 'react';
import LeftCircleOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LeftCircleOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LeftCircleOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LeftCircleOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LeftCircleOutlined);

RefIcon.displayName = 'LeftCircleOutlined';

export default RefIcon;
