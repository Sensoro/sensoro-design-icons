// This icon file is generated automatically.
import * as React from 'react';
import ObliqueLineOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ObliqueLineOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ObliqueLineOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ObliqueLineOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ObliqueLineOutlined);

RefIcon.displayName = 'ObliqueLineOutlined';

export default RefIcon;
