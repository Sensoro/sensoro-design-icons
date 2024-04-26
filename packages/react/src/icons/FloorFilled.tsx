// This icon file is generated automatically.
import * as React from 'react';
import FloorFilledSvg from '@sensoro-design/icons-svg/es/asn/FloorFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FloorFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FloorFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FloorFilled);

RefIcon.displayName = 'FloorFilled';

export default RefIcon;
