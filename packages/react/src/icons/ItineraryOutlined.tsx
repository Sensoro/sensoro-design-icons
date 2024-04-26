// This icon file is generated automatically.
import * as React from 'react';
import ItineraryOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ItineraryOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ItineraryOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ItineraryOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ItineraryOutlined);

RefIcon.displayName = 'ItineraryOutlined';

export default RefIcon;
