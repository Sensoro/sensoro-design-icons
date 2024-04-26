// This icon file is generated automatically.
import * as React from 'react';
import ClearOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ClearOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ClearOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ClearOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ClearOutlined);

RefIcon.displayName = 'ClearOutlined';

export default RefIcon;
