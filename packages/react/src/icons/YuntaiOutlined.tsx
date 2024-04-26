// This icon file is generated automatically.
import * as React from 'react';
import YuntaiOutlinedSvg from '@sensoro-design/icons-svg/es/asn/YuntaiOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const YuntaiOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={YuntaiOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(YuntaiOutlined);

RefIcon.displayName = 'YuntaiOutlined';

export default RefIcon;
