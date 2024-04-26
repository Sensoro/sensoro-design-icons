// This icon file is generated automatically.
import * as React from 'react';
import OriginalRatioOutlinedSvg from '@sensoro-design/icons-svg/es/asn/OriginalRatioOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const OriginalRatioOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={OriginalRatioOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(OriginalRatioOutlined);

RefIcon.displayName = 'OriginalRatioOutlined';

export default RefIcon;
