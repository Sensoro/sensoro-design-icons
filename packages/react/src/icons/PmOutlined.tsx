// This icon file is generated automatically.
import * as React from 'react';
import PmOutlinedSvg from '@sensoro-design/icons-svg/es/asn/PmOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PmOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PmOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PmOutlined);

RefIcon.displayName = 'PmOutlined';

export default RefIcon;
