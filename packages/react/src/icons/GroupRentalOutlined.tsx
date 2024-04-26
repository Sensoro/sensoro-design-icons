// This icon file is generated automatically.
import * as React from 'react';
import GroupRentalOutlinedSvg from '@sensoro-design/icons-svg/es/asn/GroupRentalOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const GroupRentalOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={GroupRentalOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(GroupRentalOutlined);

RefIcon.displayName = 'GroupRentalOutlined';

export default RefIcon;
