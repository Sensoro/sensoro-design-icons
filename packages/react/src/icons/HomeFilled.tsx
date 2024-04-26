// This icon file is generated automatically.
import * as React from 'react';
import HomeFilledSvg from '@sensoro-design/icons-svg/es/asn/HomeFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const HomeFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={HomeFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(HomeFilled);

RefIcon.displayName = 'HomeFilled';

export default RefIcon;
