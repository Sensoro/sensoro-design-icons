// This icon file is generated automatically.
import * as React from 'react';
import ShareAltOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ShareAltOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ShareAltOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ShareAltOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ShareAltOutlined);

RefIcon.displayName = 'ShareAltOutlined';

export default RefIcon;
