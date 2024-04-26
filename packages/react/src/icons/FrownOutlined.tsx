// This icon file is generated automatically.
import * as React from 'react';
import FrownOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FrownOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FrownOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FrownOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FrownOutlined);

RefIcon.displayName = 'FrownOutlined';

export default RefIcon;
