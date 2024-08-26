// This icon file is generated automatically.
import * as React from 'react';
import ShoutControlOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ShoutControlOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ShoutControlOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ShoutControlOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ShoutControlOutlined);

RefIcon.displayName = 'ShoutControlOutlined';

export default RefIcon;
