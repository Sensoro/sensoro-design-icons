// This icon file is generated automatically.
import * as React from 'react';
import LeftDownOutlinedSvg from '@sensoro-design/icons-svg/es/asn/LeftDownOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const LeftDownOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={LeftDownOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(LeftDownOutlined);

RefIcon.displayName = 'LeftDownOutlined';

export default RefIcon;
