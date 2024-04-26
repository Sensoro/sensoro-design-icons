// This icon file is generated automatically.
import * as React from 'react';
import DatabaseFilledSvg from '@sensoro-design/icons-svg/es/asn/DatabaseFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DatabaseFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DatabaseFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DatabaseFilled);

RefIcon.displayName = 'DatabaseFilled';

export default RefIcon;
