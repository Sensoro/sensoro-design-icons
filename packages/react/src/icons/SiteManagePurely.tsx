// This icon file is generated automatically.
import * as React from 'react';
import SiteManagePurelySvg from '@sensoro-design/icons-svg/es/asn/SiteManagePurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SiteManagePurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SiteManagePurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SiteManagePurely);

RefIcon.displayName = 'SiteManagePurely';

export default RefIcon;
