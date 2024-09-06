// This icon file is generated automatically.
import * as React from 'react';
import PanoramaMapSettingOutlinedSvg from '@sensoro-design/icons-svg/es/asn/PanoramaMapSettingOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PanoramaMapSettingOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PanoramaMapSettingOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PanoramaMapSettingOutlined);

RefIcon.displayName = 'PanoramaMapSettingOutlined';

export default RefIcon;
