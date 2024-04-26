// This icon file is generated automatically.
import * as React from 'react';
import MoreOutlinedSvg from '@sensoro-design/icons-svg/es/asn/MoreOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MoreOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MoreOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MoreOutlined);

RefIcon.displayName = 'MoreOutlined';

export default RefIcon;
