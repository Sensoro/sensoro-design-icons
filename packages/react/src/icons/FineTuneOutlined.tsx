// This icon file is generated automatically.
import * as React from 'react';
import FineTuneOutlinedSvg from '@sensoro-design/icons-svg/es/asn/FineTuneOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const FineTuneOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={FineTuneOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(FineTuneOutlined);

RefIcon.displayName = 'FineTuneOutlined';

export default RefIcon;
