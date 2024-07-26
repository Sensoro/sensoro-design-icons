// This icon file is generated automatically.
import * as React from 'react';
import OrganizationPurelySvg from '@sensoro-design/icons-svg/es/asn/OrganizationPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const OrganizationPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={OrganizationPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(OrganizationPurely);

RefIcon.displayName = 'OrganizationPurely';

export default RefIcon;
