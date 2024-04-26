// This icon file is generated automatically.
import * as React from 'react';
import MufflingFilledSvg from '@sensoro-design/icons-svg/es/asn/MufflingFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MufflingFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MufflingFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MufflingFilled);

RefIcon.displayName = 'MufflingFilled';

export default RefIcon;
