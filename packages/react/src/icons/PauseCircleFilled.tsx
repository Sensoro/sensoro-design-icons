// This icon file is generated automatically.
import * as React from 'react';
import PauseCircleFilledSvg from '@sensoro-design/icons-svg/es/asn/PauseCircleFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PauseCircleFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PauseCircleFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PauseCircleFilled);

RefIcon.displayName = 'PauseCircleFilled';

export default RefIcon;
