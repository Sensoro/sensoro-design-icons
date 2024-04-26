// This icon file is generated automatically.
import * as React from 'react';
import DownCircleOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DownCircleOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DownCircleOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DownCircleOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DownCircleOutlined);

RefIcon.displayName = 'DownCircleOutlined';

export default RefIcon;
