// This icon file is generated automatically.
import * as React from 'react';
import TextOutlinedSvg from '@sensoro-design/icons-svg/es/asn/TextOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const TextOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={TextOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(TextOutlined);

RefIcon.displayName = 'TextOutlined';

export default RefIcon;
