// This icon file is generated automatically.
import * as React from 'react';
import HighlightOutlinedSvg from '@sensoro-design/icons-svg/es/asn/HighlightOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const HighlightOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={HighlightOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(HighlightOutlined);

RefIcon.displayName = 'HighlightOutlined';

export default RefIcon;
