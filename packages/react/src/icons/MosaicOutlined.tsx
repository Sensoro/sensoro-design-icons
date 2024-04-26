// This icon file is generated automatically.
import * as React from 'react';
import MosaicOutlinedSvg from '@sensoro-design/icons-svg/es/asn/MosaicOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MosaicOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MosaicOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MosaicOutlined);

RefIcon.displayName = 'MosaicOutlined';

export default RefIcon;
