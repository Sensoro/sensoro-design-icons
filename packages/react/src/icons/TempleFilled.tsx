// This icon file is generated automatically.
import * as React from 'react';
import TempleFilledSvg from '@sensoro-design/icons-svg/es/asn/TempleFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const TempleFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={TempleFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(TempleFilled);

RefIcon.displayName = 'TempleFilled';

export default RefIcon;
