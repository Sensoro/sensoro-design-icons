// This icon file is generated automatically.
import * as React from 'react';
import DoubleLeftOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DoubleLeftOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DoubleLeftOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DoubleLeftOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DoubleLeftOutlined);

RefIcon.displayName = 'DoubleLeftOutlined';

export default RefIcon;
