// This icon file is generated automatically.
import * as React from 'react';
import DeepThinkOutlinedSvg from '@sensoro-design/icons-svg/es/asn/DeepThinkOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const DeepThinkOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={DeepThinkOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(DeepThinkOutlined);

RefIcon.displayName = 'DeepThinkOutlined';

export default RefIcon;
