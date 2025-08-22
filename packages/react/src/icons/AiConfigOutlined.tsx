// This icon file is generated automatically.
import * as React from 'react';
import AiConfigOutlinedSvg from '@sensoro-design/icons-svg/es/asn/AiConfigOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const AiConfigOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={AiConfigOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(AiConfigOutlined);

RefIcon.displayName = 'AiConfigOutlined';

export default RefIcon;
