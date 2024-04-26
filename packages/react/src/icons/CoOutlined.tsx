// This icon file is generated automatically.
import * as React from 'react';
import CoOutlinedSvg from '@sensoro-design/icons-svg/es/asn/CoOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CoOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CoOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CoOutlined);

RefIcon.displayName = 'CoOutlined';

export default RefIcon;
