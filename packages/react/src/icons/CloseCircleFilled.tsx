// This icon file is generated automatically.
import * as React from 'react';
import CloseCircleFilledSvg from '@sensoro-design/icons-svg/es/asn/CloseCircleFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const CloseCircleFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={CloseCircleFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(CloseCircleFilled);

RefIcon.displayName = 'CloseCircleFilled';

export default RefIcon;
