// This icon file is generated automatically.
import * as React from 'react';
import FineTuningOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FineTuningOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FineTuningOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FineTuningOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FineTuningOutlined);

RefIcon.displayName = 'FineTuningOutlined';

export default RefIcon;
