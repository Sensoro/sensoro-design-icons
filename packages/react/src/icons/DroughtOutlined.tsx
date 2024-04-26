// This icon file is generated automatically.
import * as React from 'react';
import DroughtOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DroughtOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DroughtOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DroughtOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DroughtOutlined);

RefIcon.displayName = 'DroughtOutlined';

export default RefIcon;
