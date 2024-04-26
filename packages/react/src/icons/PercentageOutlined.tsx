// This icon file is generated automatically.
import * as React from 'react';
import PercentageOutlinedSvg from '@sensoro-design/icons-svg/es/asn/PercentageOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PercentageOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PercentageOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PercentageOutlined);

RefIcon.displayName = 'PercentageOutlined';

export default RefIcon;
