// This icon file is generated automatically.
import * as React from 'react';
import CateringOutlinedSvg from '@sensoro-design/icons-svg/es/asn/CateringOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CateringOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CateringOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CateringOutlined);

RefIcon.displayName = 'CateringOutlined';

export default RefIcon;
