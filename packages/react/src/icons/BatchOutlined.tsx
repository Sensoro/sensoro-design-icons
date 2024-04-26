// This icon file is generated automatically.
import * as React from 'react';
import BatchOutlinedSvg from '@sensoro-design/icons-svg/es/asn/BatchOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const BatchOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={BatchOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(BatchOutlined);

RefIcon.displayName = 'BatchOutlined';

export default RefIcon;
