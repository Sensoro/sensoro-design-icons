// This icon file is generated automatically.
import * as React from 'react';
import InclinationOutlinedSvg from '@sensoro-design/icons-svg/es/asn/InclinationOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const InclinationOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={InclinationOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(InclinationOutlined);

RefIcon.displayName = 'InclinationOutlined';

export default RefIcon;
