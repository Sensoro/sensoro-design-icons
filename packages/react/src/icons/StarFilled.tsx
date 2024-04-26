// This icon file is generated automatically.
import * as React from 'react';
import StarFilledSvg from '@sensoro-design/icons-svg/es/asn/StarFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const StarFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={StarFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(StarFilled);

RefIcon.displayName = 'StarFilled';

export default RefIcon;
