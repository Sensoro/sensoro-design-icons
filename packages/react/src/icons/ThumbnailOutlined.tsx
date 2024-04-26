// This icon file is generated automatically.
import * as React from 'react';
import ThumbnailOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ThumbnailOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ThumbnailOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ThumbnailOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ThumbnailOutlined);

RefIcon.displayName = 'ThumbnailOutlined';

export default RefIcon;
