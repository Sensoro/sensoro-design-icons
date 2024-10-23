// This icon file is generated automatically.
import * as React from 'react';
import GridOutlinedSvg from '@sensoro-design/icons-svg/es/asn/GridOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const GridOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={GridOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(GridOutlined);

RefIcon.displayName = 'GridOutlined';

export default RefIcon;
