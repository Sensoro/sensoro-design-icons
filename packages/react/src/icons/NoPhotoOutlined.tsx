// This icon file is generated automatically.
import * as React from 'react';
import NoPhotoOutlinedSvg from '@sensoro-design/icons-svg/es/asn/NoPhotoOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const NoPhotoOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={NoPhotoOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(NoPhotoOutlined);

RefIcon.displayName = 'NoPhotoOutlined';

export default RefIcon;
