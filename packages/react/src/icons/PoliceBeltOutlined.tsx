// This icon file is generated automatically.
import * as React from 'react';
import PoliceBeltOutlinedSvg from '@sensoro-design/icons-svg/es/asn/PoliceBeltOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PoliceBeltOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PoliceBeltOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PoliceBeltOutlined);

RefIcon.displayName = 'PoliceBeltOutlined';

export default RefIcon;
