// This icon file is generated automatically.
import * as React from 'react';
import MediaLibraryOutlinedSvg from '@sensoro-design/icons-svg/es/asn/MediaLibraryOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MediaLibraryOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MediaLibraryOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MediaLibraryOutlined);

RefIcon.displayName = 'MediaLibraryOutlined';

export default RefIcon;
