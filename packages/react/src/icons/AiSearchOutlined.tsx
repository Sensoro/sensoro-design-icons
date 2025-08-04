// This icon file is generated automatically.
import * as React from 'react';
import AiSearchOutlinedSvg from '@sensoro-design/icons-svg/es/asn/AiSearchOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AiSearchOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AiSearchOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AiSearchOutlined);

RefIcon.displayName = 'AiSearchOutlined';

export default RefIcon;
