// This icon file is generated automatically.
import * as React from 'react';
import OverviewOutlinedSvg from '@sensoro-design/icons-svg/es/asn/OverviewOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const OverviewOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={OverviewOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(OverviewOutlined);

RefIcon.displayName = 'OverviewOutlined';

export default RefIcon;
