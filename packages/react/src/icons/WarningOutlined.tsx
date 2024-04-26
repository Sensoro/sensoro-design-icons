// This icon file is generated automatically.
import * as React from 'react';
import WarningOutlinedSvg from '@sensoro-design/icons-svg/es/asn/WarningOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const WarningOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={WarningOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(WarningOutlined);

RefIcon.displayName = 'WarningOutlined';

export default RefIcon;
