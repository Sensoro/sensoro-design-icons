// This icon file is generated automatically.
import * as React from 'react';
import PauseFilledSvg from '@sensoro-design/icons-svg/es/asn/PauseFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PauseFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PauseFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PauseFilled);

RefIcon.displayName = 'PauseFilled';

export default RefIcon;
