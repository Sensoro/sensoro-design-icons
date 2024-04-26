// This icon file is generated automatically.
import * as React from 'react';
import OfflineOutlinedSvg from '@sensoro-design/icons-svg/es/asn/OfflineOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const OfflineOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={OfflineOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(OfflineOutlined);

RefIcon.displayName = 'OfflineOutlined';

export default RefIcon;
