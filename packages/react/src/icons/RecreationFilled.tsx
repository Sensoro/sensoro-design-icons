// This icon file is generated automatically.
import * as React from 'react';
import RecreationFilledSvg from '@sensoro-design/icons-svg/es/asn/RecreationFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RecreationFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RecreationFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RecreationFilled);

RefIcon.displayName = 'RecreationFilled';

export default RefIcon;
