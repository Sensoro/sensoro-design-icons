// This icon file is generated automatically.
import * as React from 'react';
import SyncOffOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SyncOffOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SyncOffOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SyncOffOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SyncOffOutlined);

RefIcon.displayName = 'SyncOffOutlined';

export default RefIcon;
