// This icon file is generated automatically.
import * as React from 'react';
import AtlasOutlinedSvg from '@sensoro-design/icons-svg/es/asn/AtlasOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AtlasOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AtlasOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AtlasOutlined);

RefIcon.displayName = 'AtlasOutlined';

export default RefIcon;
