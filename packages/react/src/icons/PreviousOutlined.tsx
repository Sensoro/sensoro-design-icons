// This icon file is generated automatically.
import * as React from 'react';
import PreviousOutlinedSvg from '@sensoro-design/icons-svg/es/asn/PreviousOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PreviousOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PreviousOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PreviousOutlined);

RefIcon.displayName = 'PreviousOutlined';

export default RefIcon;
