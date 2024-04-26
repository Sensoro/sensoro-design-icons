// This icon file is generated automatically.
import * as React from 'react';
import FocusOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FocusOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FocusOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FocusOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FocusOutlined);

RefIcon.displayName = 'FocusOutlined';

export default RefIcon;
