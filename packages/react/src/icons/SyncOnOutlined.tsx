// This icon file is generated automatically.
import * as React from 'react';
import SyncOnOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SyncOnOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SyncOnOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SyncOnOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SyncOnOutlined);

RefIcon.displayName = 'SyncOnOutlined';

export default RefIcon;
