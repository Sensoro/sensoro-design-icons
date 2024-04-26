// This icon file is generated automatically.
import * as React from 'react';
import AskLeavePurelySvg from '@sensoro-design/icons-svg/es/asn/AskLeavePurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AskLeavePurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AskLeavePurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AskLeavePurely);

RefIcon.displayName = 'AskLeavePurely';

export default RefIcon;
