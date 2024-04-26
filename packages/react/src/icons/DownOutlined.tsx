// This icon file is generated automatically.
import * as React from 'react';
import DownOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DownOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DownOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DownOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DownOutlined);

RefIcon.displayName = 'DownOutlined';

export default RefIcon;
