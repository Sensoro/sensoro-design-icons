// This icon file is generated automatically.
import * as React from 'react';
import PostOfficeOutlinedSvg from '@sensoro-design/icons-svg/es/asn/PostOfficeOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PostOfficeOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PostOfficeOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PostOfficeOutlined);

RefIcon.displayName = 'PostOfficeOutlined';

export default RefIcon;
