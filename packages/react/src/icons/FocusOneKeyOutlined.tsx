// This icon file is generated automatically.
import * as React from 'react';
import FocusOneKeyOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FocusOneKeyOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FocusOneKeyOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FocusOneKeyOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FocusOneKeyOutlined);

RefIcon.displayName = 'FocusOneKeyOutlined';

export default RefIcon;
