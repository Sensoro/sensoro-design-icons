// This icon file is generated automatically.
import * as React from 'react';
import SpecialGroupsFilledSvg from '@sensoro-design/icons-svg/es/asn/SpecialGroupsFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SpecialGroupsFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SpecialGroupsFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SpecialGroupsFilled);

RefIcon.displayName = 'SpecialGroupsFilled';

export default RefIcon;
