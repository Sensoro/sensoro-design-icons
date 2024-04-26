// This icon file is generated automatically.
import * as React from 'react';
import BusinessAreaOutlinedSvg from '@sensoro-design/icons-svg/es/asn/BusinessAreaOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const BusinessAreaOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={BusinessAreaOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(BusinessAreaOutlined);

RefIcon.displayName = 'BusinessAreaOutlined';

export default RefIcon;
