// This icon file is generated automatically.
import * as React from 'react';
import InfoCircleFilledSvg from '@sensoro-design/icons-svg/es/asn/InfoCircleFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const InfoCircleFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={InfoCircleFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(InfoCircleFilled);

RefIcon.displayName = 'InfoCircleFilled';

export default RefIcon;
