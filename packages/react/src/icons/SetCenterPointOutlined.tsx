// This icon file is generated automatically.
import * as React from 'react';
import SetCenterPointOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SetCenterPointOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SetCenterPointOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SetCenterPointOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SetCenterPointOutlined);

RefIcon.displayName = 'SetCenterPointOutlined';

export default RefIcon;
