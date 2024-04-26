// This icon file is generated automatically.
import * as React from 'react';
import IllegalBuildingFilledSvg from '@sensoro-design/icons-svg/es/asn/IllegalBuildingFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const IllegalBuildingFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={IllegalBuildingFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(IllegalBuildingFilled);

RefIcon.displayName = 'IllegalBuildingFilled';

export default RefIcon;
