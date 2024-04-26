// This icon file is generated automatically.
import * as React from 'react';
import OrganizeFilledSvg from '@sensoro-design/icons-svg/es/asn/OrganizeFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const OrganizeFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={OrganizeFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(OrganizeFilled);

RefIcon.displayName = 'OrganizeFilled';

export default RefIcon;
