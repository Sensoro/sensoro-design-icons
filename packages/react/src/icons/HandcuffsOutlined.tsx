// This icon file is generated automatically.
import * as React from 'react';
import HandcuffsOutlinedSvg from '@sensoro-design/icons-svg/es/asn/HandcuffsOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const HandcuffsOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={HandcuffsOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(HandcuffsOutlined);

RefIcon.displayName = 'HandcuffsOutlined';

export default RefIcon;
