// This icon file is generated automatically.
import * as React from 'react';
import WarningFilledSvg from '@sensoro-design/icons-svg/es/asn/WarningFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const WarningFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={WarningFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(WarningFilled);

RefIcon.displayName = 'WarningFilled';

export default RefIcon;
