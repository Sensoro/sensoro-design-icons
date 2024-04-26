// This icon file is generated automatically.
import * as React from 'react';
import CompressOutlinedSvg from '@sensoro-design/icons-svg/es/asn/CompressOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CompressOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CompressOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CompressOutlined);

RefIcon.displayName = 'CompressOutlined';

export default RefIcon;
