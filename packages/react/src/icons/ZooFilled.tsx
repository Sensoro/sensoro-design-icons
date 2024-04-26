// This icon file is generated automatically.
import * as React from 'react';
import ZooFilledSvg from '@sensoro-design/icons-svg/es/asn/ZooFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ZooFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ZooFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ZooFilled);

RefIcon.displayName = 'ZooFilled';

export default RefIcon;
