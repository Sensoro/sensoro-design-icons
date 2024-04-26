// This icon file is generated automatically.
import * as React from 'react';
import PostOfficeFilledSvg from '@sensoro-design/icons-svg/es/asn/PostOfficeFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PostOfficeFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PostOfficeFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PostOfficeFilled);

RefIcon.displayName = 'PostOfficeFilled';

export default RefIcon;
