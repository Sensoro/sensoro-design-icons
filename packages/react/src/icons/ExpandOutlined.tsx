// This icon file is generated automatically.
import * as React from 'react';
import ExpandOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ExpandOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ExpandOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ExpandOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ExpandOutlined);

RefIcon.displayName = 'ExpandOutlined';

export default RefIcon;
