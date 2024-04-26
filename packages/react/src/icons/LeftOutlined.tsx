// This icon file is generated automatically.
import * as React from 'react';
import LeftOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LeftOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LeftOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LeftOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LeftOutlined);

RefIcon.displayName = 'LeftOutlined';

export default RefIcon;
