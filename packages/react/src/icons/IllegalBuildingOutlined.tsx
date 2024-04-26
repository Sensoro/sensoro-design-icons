// This icon file is generated automatically.
import * as React from 'react';
import IllegalBuildingOutlinedSvg from '@sensoro-design/icons-svg/es/asn/IllegalBuildingOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const IllegalBuildingOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={IllegalBuildingOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(IllegalBuildingOutlined);

RefIcon.displayName = 'IllegalBuildingOutlined';

export default RefIcon;
