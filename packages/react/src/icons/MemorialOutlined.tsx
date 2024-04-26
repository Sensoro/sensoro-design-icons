// This icon file is generated automatically.
import * as React from 'react';
import MemorialOutlinedSvg from '@sensoro-design/icons-svg/es/asn/MemorialOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MemorialOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MemorialOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MemorialOutlined);

RefIcon.displayName = 'MemorialOutlined';

export default RefIcon;
