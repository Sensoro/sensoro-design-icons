// This icon file is generated automatically.
import * as React from 'react';
import PaperClipOutlinedSvg from '@sensoro-design/icons-svg/es/asn/PaperClipOutlined';
import SensoroIcon, { SensoroIconProps } from '../components/SensoroIcon';

const PaperClipOutlined = (props: SensoroIconProps, ref: React.MutableRefObject<HTMLSpanElement>) => (
  <SensoroIcon {...props} ref={ref} icon={PaperClipOutlinedSvg} />
);

const RefIcon: React.ForwardRefExoticComponent<Omit<SensoroIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> =
  React.forwardRef<HTMLSpanElement, SensoroIconProps>(PaperClipOutlined);

RefIcon.displayName = 'PaperClipOutlined';

export default RefIcon;
