// This icon file is generated automatically.
import * as React from 'react';
import DatabaseOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DatabaseOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DatabaseOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DatabaseOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DatabaseOutlined);

RefIcon.displayName = 'DatabaseOutlined';

export default RefIcon;
