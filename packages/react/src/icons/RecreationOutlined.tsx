// This icon file is generated automatically.
import * as React from 'react';
import RecreationOutlinedSvg from '@sensoro-design/icons-svg/es/asn/RecreationOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RecreationOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RecreationOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RecreationOutlined);

RefIcon.displayName = 'RecreationOutlined';

export default RefIcon;
