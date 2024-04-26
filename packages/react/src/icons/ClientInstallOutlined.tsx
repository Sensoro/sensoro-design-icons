// This icon file is generated automatically.
import * as React from 'react';
import ClientInstallOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ClientInstallOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ClientInstallOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ClientInstallOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ClientInstallOutlined);

RefIcon.displayName = 'ClientInstallOutlined';

export default RefIcon;
