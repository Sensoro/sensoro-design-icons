// This icon file is generated automatically.
import * as React from 'react';
import EyeFilledSvg from '@sensoro-design/icons-svg/es/asn/EyeFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const EyeFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={EyeFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(EyeFilled);

RefIcon.displayName = 'EyeFilled';

export default RefIcon;
