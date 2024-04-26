// This icon file is generated automatically.
import * as React from 'react';
import PenOutlinedSvg from '@sensoro-design/icons-svg/es/asn/PenOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PenOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PenOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PenOutlined);

RefIcon.displayName = 'PenOutlined';

export default RefIcon;
