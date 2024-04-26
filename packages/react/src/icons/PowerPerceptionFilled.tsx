// This icon file is generated automatically.
import * as React from 'react';
import PowerPerceptionFilledSvg from '@sensoro-design/icons-svg/es/asn/PowerPerceptionFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PowerPerceptionFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PowerPerceptionFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PowerPerceptionFilled);

RefIcon.displayName = 'PowerPerceptionFilled';

export default RefIcon;
