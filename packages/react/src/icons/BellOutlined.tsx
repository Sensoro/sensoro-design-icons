// This icon file is generated automatically.
import * as React from 'react';
import BellOutlinedSvg from '@sensoro-design/icons-svg/es/asn/BellOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const BellOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={BellOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(BellOutlined);

RefIcon.displayName = 'BellOutlined';

export default RefIcon;
