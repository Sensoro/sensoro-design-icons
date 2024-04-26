// This icon file is generated automatically.
import * as React from 'react';
import DelayWarningOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DelayWarningOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DelayWarningOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DelayWarningOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DelayWarningOutlined);

RefIcon.displayName = 'DelayWarningOutlined';

export default RefIcon;
