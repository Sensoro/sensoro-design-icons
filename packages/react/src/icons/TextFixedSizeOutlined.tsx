// This icon file is generated automatically.
import * as React from 'react';
import TextFixedSizeOutlinedSvg from '@sensoro-design/icons-svg/es/asn/TextFixedSizeOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const TextFixedSizeOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={TextFixedSizeOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(TextFixedSizeOutlined);

RefIcon.displayName = 'TextFixedSizeOutlined';

export default RefIcon;
