// This icon file is generated automatically.
import * as React from 'react';
import CompareOutlinedSvg from '@sensoro-design/icons-svg/es/asn/CompareOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CompareOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CompareOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CompareOutlined);

RefIcon.displayName = 'CompareOutlined';

export default RefIcon;
