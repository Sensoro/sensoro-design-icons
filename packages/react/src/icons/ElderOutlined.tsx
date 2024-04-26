// This icon file is generated automatically.
import * as React from 'react';
import ElderOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ElderOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ElderOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ElderOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ElderOutlined);

RefIcon.displayName = 'ElderOutlined';

export default RefIcon;
