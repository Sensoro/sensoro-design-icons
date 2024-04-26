// This icon file is generated automatically.
import * as React from 'react';
import PayCircleFilledSvg from '@sensoro-design/icons-svg/es/asn/PayCircleFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PayCircleFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PayCircleFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PayCircleFilled);

RefIcon.displayName = 'PayCircleFilled';

export default RefIcon;
