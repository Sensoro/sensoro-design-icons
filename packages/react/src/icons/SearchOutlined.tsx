// This icon file is generated automatically.
import * as React from 'react';
import SearchOutlinedSvg from '@sensoro-design/icons-svg/es/asn/SearchOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const SearchOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={SearchOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(SearchOutlined);

RefIcon.displayName = 'SearchOutlined';

export default RefIcon;
