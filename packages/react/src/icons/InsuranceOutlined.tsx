// This icon file is generated automatically.
import * as React from 'react';
import InsuranceOutlinedSvg from '@sensoro-design/icons-svg/es/asn/InsuranceOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const InsuranceOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={InsuranceOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(InsuranceOutlined);

RefIcon.displayName = 'InsuranceOutlined';

export default RefIcon;
