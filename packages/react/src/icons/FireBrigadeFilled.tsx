// This icon file is generated automatically.
import * as React from 'react';
import FireBrigadeFilledSvg from '@sensoro-design/icons-svg/es/asn/FireBrigadeFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FireBrigadeFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FireBrigadeFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FireBrigadeFilled);

RefIcon.displayName = 'FireBrigadeFilled';

export default RefIcon;
