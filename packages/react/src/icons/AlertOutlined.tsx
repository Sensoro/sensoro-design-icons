// This icon file is generated automatically.
import * as React from 'react';
import AlertOutlinedSvg from '@sensoro-design/icons-svg/es/asn/AlertOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AlertOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AlertOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AlertOutlined);

RefIcon.displayName = 'AlertOutlined';

export default RefIcon;
