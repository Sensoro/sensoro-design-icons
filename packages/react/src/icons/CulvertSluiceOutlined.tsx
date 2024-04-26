// This icon file is generated automatically.
import * as React from 'react';
import CulvertSluiceOutlinedSvg from '@sensoro-design/icons-svg/es/asn/CulvertSluiceOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CulvertSluiceOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CulvertSluiceOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CulvertSluiceOutlined);

RefIcon.displayName = 'CulvertSluiceOutlined';

export default RefIcon;
