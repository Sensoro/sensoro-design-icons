// This icon file is generated automatically.
import * as React from 'react';
import ScissorOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ScissorOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ScissorOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ScissorOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ScissorOutlined);

RefIcon.displayName = 'ScissorOutlined';

export default RefIcon;
