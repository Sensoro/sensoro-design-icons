// This icon file is generated automatically.
import * as React from 'react';
import TextAutoHeightOutlinedSvg from '@sensoro-design/icons-svg/es/asn/TextAutoHeightOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const TextAutoHeightOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={TextAutoHeightOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(TextAutoHeightOutlined);

RefIcon.displayName = 'TextAutoHeightOutlined';

export default RefIcon;
