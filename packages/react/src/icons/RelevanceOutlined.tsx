// This icon file is generated automatically.
import * as React from 'react';
import RelevanceOutlinedSvg from '@sensoro-design/icons-svg/es/asn/RelevanceOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const RelevanceOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={RelevanceOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(RelevanceOutlined);

RefIcon.displayName = 'RelevanceOutlined';

export default RefIcon;
