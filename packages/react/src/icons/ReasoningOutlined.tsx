// This icon file is generated automatically.
import * as React from 'react';
import ReasoningOutlinedSvg from '@sensoro-design/icons-svg/es/asn/ReasoningOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const ReasoningOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={ReasoningOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(ReasoningOutlined);

RefIcon.displayName = 'ReasoningOutlined';

export default RefIcon;
