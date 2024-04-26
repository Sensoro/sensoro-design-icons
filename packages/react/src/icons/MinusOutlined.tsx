// This icon file is generated automatically.
import * as React from 'react';
import MinusOutlinedSvg from '@sensoro-design/icons-svg/es/asn/MinusOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MinusOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MinusOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MinusOutlined);

RefIcon.displayName = 'MinusOutlined';

export default RefIcon;
