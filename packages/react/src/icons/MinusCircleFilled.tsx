// This icon file is generated automatically.
import * as React from 'react';
import MinusCircleFilledSvg from '@sensoro-design/icons-svg/es/asn/MinusCircleFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const MinusCircleFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={MinusCircleFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(MinusCircleFilled);

RefIcon.displayName = 'MinusCircleFilled';

export default RefIcon;
