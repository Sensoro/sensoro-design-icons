// This icon file is generated automatically.
import * as React from 'react';
import ReasoningFilledSvg from '@sensoro-design/icons-svg/es/asn/ReasoningFilled';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ReasoningFilled = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ReasoningFilledSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ReasoningFilled);

RefIcon.displayName = 'ReasoningFilled';

export default RefIcon;
