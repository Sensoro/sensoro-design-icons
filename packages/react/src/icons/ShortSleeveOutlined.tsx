// This icon file is generated automatically.
import * as React from 'react';
import ShortSleeveOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ShortSleeveOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ShortSleeveOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ShortSleeveOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ShortSleeveOutlined);

RefIcon.displayName = 'ShortSleeveOutlined';

export default RefIcon;
