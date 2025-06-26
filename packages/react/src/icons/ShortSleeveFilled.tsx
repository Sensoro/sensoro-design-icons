// This icon file is generated automatically.
import * as React from 'react';
import ShortSleeveFilledSvg from '@sensoro-design/icons-svg/es/asn/ShortSleeveFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ShortSleeveFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ShortSleeveFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ShortSleeveFilled);

RefIcon.displayName = 'ShortSleeveFilled';

export default RefIcon;
