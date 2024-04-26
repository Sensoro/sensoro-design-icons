// This icon file is generated automatically.
import * as React from 'react';
import MeansAccessOutlinedSvg from '@sensoro-design/icons-svg/es/asn/MeansAccessOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MeansAccessOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MeansAccessOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MeansAccessOutlined);

RefIcon.displayName = 'MeansAccessOutlined';

export default RefIcon;
