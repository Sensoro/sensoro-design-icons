// This icon file is generated automatically.
import * as React from 'react';
import MinusCircleOutlinedSvg from '@sensoro-design/icons-svg/es/asn/MinusCircleOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MinusCircleOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MinusCircleOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MinusCircleOutlined);

RefIcon.displayName = 'MinusCircleOutlined';

export default RefIcon;
