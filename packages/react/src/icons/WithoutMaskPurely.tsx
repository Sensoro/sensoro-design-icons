// This icon file is generated automatically.
import * as React from 'react';
import WithoutMaskPurelySvg from '@sensoro-design/icons-svg/es/asn/WithoutMaskPurely';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const WithoutMaskPurely = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={WithoutMaskPurelySvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(WithoutMaskPurely);

RefIcon.displayName = 'WithoutMaskPurely';

export default RefIcon;
