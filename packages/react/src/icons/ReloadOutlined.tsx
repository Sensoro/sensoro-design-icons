// This icon file is generated automatically.
import * as React from 'react';
import ReloadOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ReloadOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ReloadOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ReloadOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ReloadOutlined);

RefIcon.displayName = 'ReloadOutlined';

export default RefIcon;
