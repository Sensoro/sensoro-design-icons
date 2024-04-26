// This icon file is generated automatically.
import * as React from 'react';
import ReservoirOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ReservoirOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ReservoirOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ReservoirOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ReservoirOutlined);

RefIcon.displayName = 'ReservoirOutlined';

export default RefIcon;
