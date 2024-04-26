// This icon file is generated automatically.
import * as React from 'react';
import DoubleRightOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DoubleRightOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DoubleRightOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DoubleRightOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DoubleRightOutlined);

RefIcon.displayName = 'DoubleRightOutlined';

export default RefIcon;
