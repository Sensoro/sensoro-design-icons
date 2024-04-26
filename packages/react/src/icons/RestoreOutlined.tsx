// This icon file is generated automatically.
import * as React from 'react';
import RestoreOutlinedSvg from '@sensoro-design/icons-svg/es/asn/RestoreOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RestoreOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RestoreOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RestoreOutlined);

RefIcon.displayName = 'RestoreOutlined';

export default RefIcon;
