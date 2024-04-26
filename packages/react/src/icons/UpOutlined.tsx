// This icon file is generated automatically.
import * as React from 'react';
import UpOutlinedSvg from '@sensoro-design/icons-svg/es/asn/UpOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const UpOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={UpOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(UpOutlined);

RefIcon.displayName = 'UpOutlined';

export default RefIcon;
