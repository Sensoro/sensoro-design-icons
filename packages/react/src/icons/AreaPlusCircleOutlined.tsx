// This icon file is generated automatically.
import * as React from 'react';
import AreaPlusCircleOutlinedSvg from '@sensoro-design/icons-svg/es/asn/AreaPlusCircleOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AreaPlusCircleOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AreaPlusCircleOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AreaPlusCircleOutlined);

RefIcon.displayName = 'AreaPlusCircleOutlined';

export default RefIcon;
