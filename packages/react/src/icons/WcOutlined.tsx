// This icon file is generated automatically.
import * as React from 'react';
import WcOutlinedSvg from '@sensoro-design/icons-svg/es/asn/WcOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const WcOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={WcOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(WcOutlined);

RefIcon.displayName = 'WcOutlined';

export default RefIcon;
