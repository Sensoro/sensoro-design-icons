// This icon file is generated automatically.
import * as React from 'react';
import FineTuneFilledSvg from '@sensoro-design/icons-svg/es/asn/FineTuneFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FineTuneFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FineTuneFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FineTuneFilled);

RefIcon.displayName = 'FineTuneFilled';

export default RefIcon;
