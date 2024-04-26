// This icon file is generated automatically.
import * as React from 'react';
import SearchProOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SearchProOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SearchProOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SearchProOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SearchProOutlined);

RefIcon.displayName = 'SearchProOutlined';

export default RefIcon;
