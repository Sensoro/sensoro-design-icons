// This icon file is generated automatically.
import * as React from 'react';
import MigrateOutlinedSvg from '@sensoro-design/icons-svg/es/asn/MigrateOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MigrateOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MigrateOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MigrateOutlined);

RefIcon.displayName = 'MigrateOutlined';

export default RefIcon;
