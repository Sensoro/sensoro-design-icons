// This icon file is generated automatically.
import * as React from 'react';
import DockFilledSvg from '@sensoro-design/icons-svg/es/asn/DockFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DockFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DockFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DockFilled);

RefIcon.displayName = 'DockFilled';

export default RefIcon;
