// This icon file is generated automatically.
import * as React from 'react';
import HelmetOutlinedSvg from '@sensoro-design/icons-svg/es/asn/HelmetOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const HelmetOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={HelmetOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(HelmetOutlined);

RefIcon.displayName = 'HelmetOutlined';

export default RefIcon;
