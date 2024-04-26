// This icon file is generated automatically.
import * as React from 'react';
import SyncOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SyncOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SyncOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SyncOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SyncOutlined);

RefIcon.displayName = 'SyncOutlined';

export default RefIcon;
